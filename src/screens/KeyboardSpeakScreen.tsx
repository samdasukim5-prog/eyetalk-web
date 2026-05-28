import { useState, useRef, useEffect } from 'react';
import { TopBar } from '../components/TopBar';
import { IconKeyboard } from '../components/Icons';
import * as Hangul from 'hangul-js';

interface KeyboardSpeakScreenProps {
  onSpeak: (text: string) => void;
  onBack: () => void;
  onHome: () => void;
  onSettings: () => void;
}

type KeyboardLayout = 'ko' | 'en' | 'num';

const KO_ROWS = [
  ['ㅂ', 'ㅈ', 'ㄷ', 'ㄱ', 'ㅅ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅐ', 'ㅔ'],
  ['ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ'],
  ['ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ']
];

const KO_SHIFT_ROWS = [
  ['ㅃ', 'ㅉ', 'ㄸ', 'ㄲ', 'ㅆ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅒ', 'ㅖ'],
  ['ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ'],
  ['ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ']
];

const EN_ROWS = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm']
];

const NUM_ROWS = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'],
  ['~', '-', '+', '=', '?', '/', ',', '.', ':', ';']
];

const AUTOCOMPLETE_WORDS = [
  "안녕하세요", "감사합니다", "죄송합니다", "네", "아니요", 
  "아파요", "머리가 아파요", "목이 아파요", "어깨가 아파요", "배가 아파요", "팔이 아파요", "다리가 아파요",
  "전혀 안 아파요", "조금 아파요", "많이 아파요", "매우 심해요",
  "가래 빼주세요", "물 주세요", "담요 주세요", "화장실 가고 싶어요", "전화 해주세요", "가족 불러주세요", "약 주세요",
  "TV 켜주세요", "TV 꺼주세요", "커튼 쳐주세요", "커튼 걷어주세요", "추워요", "더워요", "불편해요", "피곤해요",
  "머리를 올려주세요", "머리를 내려주세요", "다리를 올려주세요", "다리를 내려주세요", "자세가 불편해요",
  "좋아요", "힘들어요", "무서워요", "외로워요", "지루해요",
  "배고파요", "목말라요", "도와주세요", "고마워요", "사랑해요", "자고 싶어요",
  "불 꺼주세요", "불 켜주세요", "창문 열어주세요", "창문 닫아주세요"
];

const DEFAULT_SUGGESTIONS = ["안녕하세요", "감사합니다", "도와주세요", "물 주세요", "불편해요"];

export function KeyboardSpeakScreen({ onSpeak, onBack, onHome, onSettings }: KeyboardSpeakScreenProps) {
  const [jasos, setJasos] = useState<string[]>([]);
  const [layout, setLayout] = useState<KeyboardLayout>('ko');
  const [isShiftActive, setIsShiftActive] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const textValue = Hangul.assemble(jasos);

  // Auto scroll textarea to bottom when text changes
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
    }
  }, [textValue]);

  const handleKeyPress = (key: string) => {
    setJasos(prev => [...prev, key]);
    if (isShiftActive) {
      setIsShiftActive(false); // Reset shift after typing one uppercase letter
    }
  };

  const handleSpace = () => {
    setJasos(prev => [...prev, ' ']);
  };

  const handleBackspace = () => {
    setJasos(prev => prev.slice(0, -1));
  };

  const handleClear = () => {
    setJasos([]);
  };

  const handleSpeak = () => {
    if (textValue.trim()) {
      onSpeak(textValue.trim());
    }
  };

  const handleSelectSuggestion = (word: string) => {
    const disassembled = Hangul.disassemble(word);
    setJasos(disassembled);
  };

  const getSuggestions = () => {
    const trimmed = textValue.trim();
    if (!trimmed) {
      return DEFAULT_SUGGESTIONS;
    }
    return AUTOCOMPLETE_WORDS.filter(
      word => word.toLowerCase().includes(trimmed.toLowerCase()) && word !== trimmed
    ).slice(0, 5);
  };

  const activeRows = () => {
    if (layout === 'ko') {
      return isShiftActive ? KO_SHIFT_ROWS : KO_ROWS;
    } else if (layout === 'en') {
      return EN_ROWS;
    } else {
      return NUM_ROWS;
    }
  };

  return (
    <>
      <TopBar title="자유롭게 말하기" onBack={onBack} onHome={onHome} onSettings={onSettings} onSpeak={onSpeak} />
      <div className="screen-body" style={{ padding: '0', display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
        
        {/* 입력 및 말하기 상부 패널 */}
        <div style={{ flex: 1, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: '10px', minHeight: '140px' }}>
          <textarea
            ref={textareaRef}
            readOnly
            style={{
              flex: 1,
              width: '100%',
              borderRadius: '14px',
              border: '2px solid var(--border)',
              padding: '12px 14px',
              fontSize: '20px',
              fontWeight: '600',
              fontFamily: 'inherit',
              color: 'var(--text)',
              resize: 'none',
              outline: 'none',
              background: '#fff',
              boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.01)',
            }}
            value={textValue}
            placeholder="하단의 가상 키보드를 조준하여 입력해 보세요..."
          />

          {/* 자동완성 제안 바 */}
          <div className="suggestions-bar" style={{ padding: '0 4px 4px 4px' }}>
            {getSuggestions().map((suggestion, idx) => (
              <button
                key={idx}
                className="suggestion-chip"
                onClick={() => handleSelectSuggestion(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '10px', height: '48px', flexShrink: 0 }}>
            <button
              onClick={handleClear}
              style={{
                flex: 1,
                borderRadius: '12px',
                border: '2px solid var(--border)',
                background: 'var(--surface)',
                color: 'var(--text-secondary)',
                fontSize: '15px',
                fontWeight: '700',
                cursor: 'pointer',
              }}
            >
              전체 지우기
            </button>
            <button
              onClick={handleSpeak}
              style={{
                flex: 2,
                borderRadius: '12px',
                border: 'none',
                background: 'var(--primary)',
                color: '#fff',
                fontSize: '15px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
              }}
            >
              <IconKeyboard size={18} />
              <span>음성 재생</span>
            </button>
          </div>
        </div>

        {/* 하단 절반 가상 키보드 영역 */}
        <div className="virtual-keyboard" style={{ flexShrink: 0 }}>
          
          {/* 키보드 레이아웃 탭 */}
          <div className="keyboard-tabs">
            <button
              className={`kbd-tab-btn ${layout === 'ko' ? 'active' : ''}`}
              onClick={() => { setLayout('ko'); setIsShiftActive(false); }}
            >
              한글
            </button>
            <button
              className={`kbd-tab-btn ${layout === 'en' ? 'active' : ''}`}
              onClick={() => { setLayout('en'); }}
            >
              English
            </button>
            <button
              className={`kbd-tab-btn ${layout === 'num' ? 'active' : ''}`}
              onClick={() => { setLayout('num'); }}
            >
              숫자/기호
            </button>
          </div>

          {/* 문자 키 행 */}
          {activeRows().map((row, rowIdx) => (
            <div key={rowIdx} className="keyboard-row">
              {/* 한글 레이아웃의 3번째 행 왼쪽에 Shift 키 추가 */}
              {layout === 'ko' && rowIdx === 2 && (
                <button
                  className={`key-btn special-key ${isShiftActive ? 'active-shift' : ''}`}
                  style={{ flex: 1.2 }}
                  onClick={() => setIsShiftActive(prev => !prev)}
                >
                  Shift
                </button>
              )}

              {row.map(char => (
                <button
                  key={char}
                  className="key-btn"
                  onClick={() => handleKeyPress(char)}
                >
                  {char}
                </button>
              ))}

              {/* 모든 레이아웃의 3번째 행 오른쪽에 Backspace 키 추가 */}
              {rowIdx === 2 && (
                <button
                  className="key-btn special-key"
                  style={{ flex: 1.5 }}
                  onClick={handleBackspace}
                >
                  지우기
                </button>
              )}
            </div>
          ))}

          {/* 마지막 스페이스바 및 기능 키 행 */}
          <div className="keyboard-row">
            <button
              className="key-btn special-key space-key"
              onClick={handleSpace}
            >
              스페이스 (띄어쓰기)
            </button>
          </div>
        </div>

      </div>
    </>
  );
}
