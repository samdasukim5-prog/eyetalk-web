import { TopBar } from '../components/TopBar';
import { IconKeyboard, IconLink, IconVoice } from '../components/Icons';

interface MenuScreenProps {
  onNavigate: (screenId: 'main' | 'keyboard_speak' | 'links') => void;
  onSettings: () => void;
  onSpeak: (text: string) => void;
  onHome: () => void;
}

export function MenuScreen({ onNavigate, onSettings, onSpeak, onHome }: MenuScreenProps) {
  return (
    <>
      <TopBar showBrand onSpeak={onSpeak} onSettings={onSettings} onHome={onHome} />
      <div className="screen-body" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', marginBottom: '8px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text)', marginBottom: '6px' }}>어떤 서비스를 이용할까요?</h2>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>시선 또는 터치로 메뉴를 선택해 주세요.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', flex: 1, justifyContent: 'center' }}>
          {/* 자유롭게 말하기 */}
          <button
            onClick={() => onNavigate('keyboard_speak')}
            className="menu-hub-card"
          >
            <div className="icon-wrapper" style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}>
              <IconKeyboard size={28} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text)' }}>자유롭게 말하기</div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '4px' }}>키보드로 직접 입력해서 말하기</div>
            </div>
          </button>

          {/* 자주쓰는 표현 */}
          <button
            onClick={() => onNavigate('main')}
            className="menu-hub-card"
          >
            <div className="icon-wrapper" style={{ background: 'var(--thanks-bg)', color: 'var(--thanks-fg)' }}>
              <IconVoice size={28} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text)' }}>자주쓰는 표현</div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '4px' }}>상황별 자주 사용하는 단어 및 카드</div>
            </div>
          </button>

          {/* 유용한 사이트 */}
          <button
            onClick={() => onNavigate('links')}
            className="menu-hub-card"
          >
            <div className="icon-wrapper" style={{ background: 'var(--warm-bg)', color: 'var(--warm-fg)' }}>
              <IconLink size={28} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text)' }}>유용한 사이트</div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '4px' }}>인터넷 포털 및 동영상 사이트 바로가기</div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
