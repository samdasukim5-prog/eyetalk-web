import { useState } from 'react';
import { TopBar } from '../components/TopBar';
import { IconKeyboard } from '../components/Icons';

interface KeyboardSpeakScreenProps {
  onSpeak: (text: string) => void;
  onBack: () => void;
  onHome: () => void;
  onSettings: () => void;
}

export function KeyboardSpeakScreen({ onSpeak, onBack, onHome, onSettings }: KeyboardSpeakScreenProps) {
  const [text, setText] = useState('');

  const handleSpeak = () => {
    if (text.trim()) {
      onSpeak(text.trim());
    }
  };

  return (
    <>
      <TopBar title="자유롭게 말하기" onBack={onBack} onHome={onHome} onSettings={onSettings} onSpeak={onSpeak} />
      <div className="screen-body" style={{ padding: '16px', gap: '16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <textarea
            style={{
              flex: 1,
              width: '100%',
              borderRadius: '16px',
              border: '2px solid var(--border)',
              padding: '16px',
              fontSize: '18px',
              fontWeight: '500',
              fontFamily: 'inherit',
              color: 'var(--text)',
              resize: 'none',
              outline: 'none',
              boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)',
              transition: 'border-color 0.2s ease',
            }}
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="하고 싶은 말을 키보드로 직접 입력해 보세요..."
            autoFocus
            onKeyDown={e => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSpeak();
              }
            }}
          />
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={() => setText('')}
              style={{
                flex: 1,
                padding: '16px',
                borderRadius: '14px',
                border: '2px solid var(--border)',
                background: 'var(--surface)',
                color: 'var(--text-secondary)',
                fontSize: '16px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'opacity 0.15s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              전체 지우기
            </button>
            <button
              onClick={handleSpeak}
              style={{
                flex: 2,
                padding: '16px',
                borderRadius: '14px',
                border: 'none',
                background: 'var(--primary)',
                color: '#fff',
                fontSize: '16px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'opacity 0.15s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <IconKeyboard size={20} />
              <span>자유롭게 말하기</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
