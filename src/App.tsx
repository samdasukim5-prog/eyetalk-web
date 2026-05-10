import { useState, useRef, useCallback, type CSSProperties } from 'react';
import { useSettings } from './hooks/useSettings';
import { OnboardingScreen } from './screens/OnboardingScreen';
import { MainScreen } from './screens/MainScreen';
import { SubItemsScreen } from './screens/SubItemsScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import type { MessageItem } from './content/messages';

export interface SubScreen {
  id: 'subitems';
  title: string;
  items: MessageItem[];
  banner?: string;
}

type Screen =
  | { id: 'onboarding' }
  | { id: 'main' }
  | SubScreen
  | { id: 'settings' };

const FONT_SIZE_MAP: Record<string, string> = {
  md: '15px',
  lg: '18px',
  xl: '21px',
};

export default function App() {
  const { settings, update } = useSettings();

  const [stack, setStack] = useState<Screen[]>(() => {
    const onboarded = localStorage.getItem('@italk_onboarded') === 'true';
    return [{ id: onboarded ? 'main' : 'onboarding' }];
  });

  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSpeak = useCallback((text: string) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = 'ko-KR';
    utt.rate = settings.rate;
    window.speechSynthesis.speak(utt);

    setToast(text);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2500);
  }, [settings.rate]);

  const push = (screen: SubScreen | { id: 'settings' }) =>
    setStack(s => [...s, screen]);

  const pop = () =>
    setStack(s => (s.length > 1 ? s.slice(0, -1) : s));

  const current = stack[stack.length - 1];

  const shellStyle = {
    '--card-font-base': FONT_SIZE_MAP[settings.fontSize],
  } as CSSProperties;

  return (
    <div className="app-shell" style={shellStyle}>
      {current.id === 'onboarding' && (
        <OnboardingScreen onStart={() => setStack([{ id: 'main' }])} />
      )}

      {current.id === 'main' && (
        <MainScreen
          onSpeak={handleSpeak}
          onPush={push}
          onSettings={() => push({ id: 'settings' })}
        />
      )}

      {current.id === 'subitems' && (
        <SubItemsScreen
          title={current.title}
          items={current.items}
          banner={current.banner}
          onSpeak={handleSpeak}
          onBack={pop}
          onPush={push}
        />
      )}

      {current.id === 'settings' && (
        <SettingsScreen
          settings={settings}
          onUpdate={update}
          onBack={pop}
          onSpeak={handleSpeak}
        />
      )}

      {toast && (
        <div className="utterance-toast">
          <span>🔊</span>
          <span>{toast}</span>
        </div>
      )}
    </div>
  );
}
