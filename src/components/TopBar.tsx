import { useState } from 'react';
import { IconEye, IconBack, IconKeyboard, IconSettings } from './Icons';

interface TopBarProps {
  showBrand?: boolean;
  title?: string;
  onBack?: () => void;
  onSettings?: () => void;
  onSpeak: (text: string) => void;
}

export function TopBar({ showBrand, title, onBack, onSettings, onSpeak }: TopBarProps) {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState('');

  const handleSpeak = () => {
    if (text.trim()) {
      onSpeak(text.trim());
      setShowModal(false);
      setText('');
    }
  };

  return (
    <>
      <div className="topbar">
        {showBrand ? (
          <div className="topbar-brand">
            <div className="brand-mark">
              <IconEye size={18} color="var(--primary)" />
            </div>
            <div>
              <div className="brand-name">eye<em>talk</em></div>
              <div className="brand-sub">AAC</div>
            </div>
          </div>
        ) : (
          <button className="topbar-back" onClick={onBack}>
            <IconBack size={20} />
            <span>뒤로</span>
          </button>
        )}

        {title && <div className="topbar-title">{title}</div>}
        {!title && !showBrand && <div className="topbar-spacer" />}

        <div style={{ display: 'flex', gap: 4, flex: 1, justifyContent: 'flex-end' }}>
          {showBrand && onSettings && (
            <button className="topbar-kbd" onClick={onSettings} aria-label="설정">
              <IconSettings size={22} />
            </button>
          )}
          <button className="topbar-kbd" onClick={() => setShowModal(true)} aria-label="직접 입력">
            <IconKeyboard size={22} />
          </button>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-title">직접 입력</div>
            <textarea
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="하고 싶은 말을 입력하세요..."
              autoFocus
              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSpeak(); }}}
            />
            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => { setShowModal(false); setText(''); }}>취소</button>
              <button className="btn-speak" onClick={handleSpeak}>말하기</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
