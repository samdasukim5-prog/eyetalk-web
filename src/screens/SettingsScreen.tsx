import { TopBar } from '../components/TopBar';
import { IconSettings, IconVoice } from '../components/Icons';
import type { Settings } from '../hooks/useSettings';

const FONT_LABELS: Record<Settings['fontSize'], string> = {
  md: '보통',
  lg: '크게',
  xl: '매우 크게',
};

const RATE_OPTIONS: { value: number; label: string }[] = [
  { value: 0.7, label: '느리게' },
  { value: 0.9, label: '보통' },
  { value: 1.1, label: '빠르게' },
];

interface SettingsScreenProps {
  settings: Settings;
  onUpdate: (patch: Partial<Settings>) => void;
  onBack: () => void;
  onSpeak: (text: string) => void;
}

export function SettingsScreen({ settings, onUpdate, onBack, onSpeak }: SettingsScreenProps) {
  return (
    <>
      <TopBar title="설정" onBack={onBack} onSpeak={onSpeak} />
      <div className="screen-body" style={{ overflowY: 'auto' }}>
        <div className="settings-list">
          <div className="settings-row">
            <div className="settings-row-top">
              <IconSettings size={18} color="var(--text-secondary)" />
              <span className="settings-row-label">글자 크기</span>
              <span className="settings-row-current">{FONT_LABELS[settings.fontSize]}</span>
            </div>
            <div className="settings-chips">
              {(['md', 'lg', 'xl'] as const).map(s => (
                <button
                  key={s}
                  className={`chip${settings.fontSize === s ? ' active' : ''}`}
                  onClick={() => onUpdate({ fontSize: s })}
                >
                  {FONT_LABELS[s]}
                </button>
              ))}
            </div>
          </div>

          <div className="settings-row">
            <div className="settings-row-top">
              <IconVoice size={18} color="var(--text-secondary)" />
              <span className="settings-row-label">말하기 속도</span>
              <span className="settings-row-current">
                {RATE_OPTIONS.find(r => r.value === settings.rate)?.label ?? '보통'}
              </span>
            </div>
            <div className="settings-chips">
              {RATE_OPTIONS.map(({ value, label }) => (
                <button
                  key={value}
                  className={`chip${settings.rate === value ? ' active' : ''}`}
                  onClick={() => onUpdate({ rate: value })}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="settings-row">
            <div className="settings-row-top">
              <IconVoice size={18} color="var(--text-secondary)" />
              <span className="settings-row-label">음성 테스트</span>
            </div>
            <button
              className="chip"
              onClick={() => onSpeak('안녕하세요. 아이토크입니다.')}
              style={{ alignSelf: 'flex-start' }}
            >
              테스트 재생
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
