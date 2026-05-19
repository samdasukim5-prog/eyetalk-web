import { useState, useRef, useCallback, type CSSProperties } from 'react';
import { useSettings } from './hooks/useSettings';
import { OnboardingScreen } from './screens/OnboardingScreen';
import { MenuScreen } from './screens/MenuScreen';
import { MainScreen } from './screens/MainScreen';
import { KeyboardSpeakScreen } from './screens/KeyboardSpeakScreen';
import { LinksScreen } from './screens/LinksScreen';
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
  | { id: 'menu' }
  | { id: 'main' }
  | { id: 'keyboard_speak' }
  | { id: 'links' }
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
    return [{ id: 'onboarding' }];
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

  const push = (screen: SubScreen | { id: 'settings' } | { id: 'main' } | { id: 'keyboard_speak' } | { id: 'links' }) =>
    setStack(s => [...s, screen]);

  const pop = () =>
    setStack(s => (s.length > 1 ? s.slice(0, -1) : s));

  const goHome = () => setStack([{ id: 'menu' }]);

  const current = stack[stack.length - 1];

  const shellStyle = {
    '--card-font-base': FONT_SIZE_MAP[settings.fontSize],
  } as CSSProperties;

  return (
    <div className="app-shell" style={shellStyle}>
      {current.id === 'onboarding' && (
        <OnboardingScreen onStart={() => setStack([{ id: 'menu' }])} />
      )}

      {current.id === 'menu' && (
        <MenuScreen
          onNavigate={id => push({ id })}
          onSettings={() => push({ id: 'settings' })}
          onSpeak={handleSpeak}
          onHome={goHome}
        />
      )}

      {current.id === 'main' && (
        <MainScreen
          onSpeak={handleSpeak}
          onPush={push}
          onSettings={() => push({ id: 'settings' })}
          onHome={goHome}
          onBack={pop}
        />
      )}

      {current.id === 'keyboard_speak' && (
        <KeyboardSpeakScreen
          onSpeak={handleSpeak}
          onBack={pop}
          onHome={goHome}
          onSettings={() => push({ id: 'settings' })}
        />
      )}

      {current.id === 'links' && (
        <LinksScreen
          onBack={pop}
          onHome={goHome}
          onSettings={() => push({ id: 'settings' })}
          onSpeak={handleSpeak}
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
          onHome={goHome}
          onSettings={() => push({ id: 'settings' })}
        />
      )}

      {current.id === 'settings' && (
        <SettingsScreen
          settings={settings}
          onUpdate={update}
          onBack={pop}
          onSpeak={handleSpeak}
          onHome={goHome}
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
