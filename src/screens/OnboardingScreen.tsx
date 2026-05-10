import { useState } from 'react';
import { IconEye, IconWait, IconCheck } from '../components/Icons';

const STEPS = [
  { num: 1, Icon: IconEye,   label: '바라보기' },
  { num: 2, Icon: IconWait,  label: '버튼 터치' },
  { num: 3, Icon: IconCheck, label: '선택 완료' },
];

interface OnboardingScreenProps {
  onStart: () => void;
}

export function OnboardingScreen({ onStart }: OnboardingScreenProps) {
  const [practiced, setPracticed] = useState(false);

  const handleStart = () => {
    localStorage.setItem('@italk_onboarded', 'true');
    onStart();
  };

  return (
    <div className="screen-body onboard-body">
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div className="brand-mark">
          <IconEye size={20} color="var(--primary)" />
        </div>
        <div>
          <div className="brand-name">eye<em>talk</em></div>
          <div className="brand-sub">AAC COMMUNICATOR</div>
        </div>
      </div>

      <div className="onboard-hero">
        <h1>눈으로 말하는<br />새로운 방법</h1>
        <p>버튼을 터치하거나 시선으로<br />원하는 말을 선택하세요.</p>
      </div>

      <div className="steps">
        {STEPS.map(s => (
          <div key={s.num} className="step">
            <div className="step-num">{s.num}</div>
            <div className="step-icon">
              <s.Icon size={22} color="var(--primary)" />
            </div>
            <div className="step-label">{s.label}</div>
          </div>
        ))}
      </div>

      <button
        className={`practice-btn${practiced ? ' done' : ''}`}
        onClick={() => setPracticed(true)}
      >
        {practiced ? (
          <>
            <IconCheck size={26} color="var(--success)" strokeWidth={2.6} />
            <span style={{ color: 'var(--success)' }}>잘하셨어요!</span>
          </>
        ) : (
          <>
            <IconEye size={26} color="var(--primary)" />
            <span>여기를 한 번 터치해보세요</span>
          </>
        )}
      </button>

      <button className="start-btn" onClick={handleStart}>
        <IconCheck size={18} color="#fff" strokeWidth={2.6} />
        <span>시작하기</span>
      </button>
    </div>
  );
}
