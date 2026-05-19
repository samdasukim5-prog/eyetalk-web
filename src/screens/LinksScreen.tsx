import { TopBar } from '../components/TopBar';
import { ExternalLink } from 'lucide-react';

interface LinksScreenProps {
  onBack: () => void;
  onHome: () => void;
  onSettings: () => void;
  onSpeak: (text: string) => void;
}

const USEFUL_LINKS = [
  { title: '네이버 (Naver)', desc: '대한민국 대표 검색 포털 사이트', url: 'https://www.naver.com' },
  { title: '유튜브 (YouTube)', desc: '재미있는 비디오, 실시간 방송 및 음악 감상', url: 'https://www.youtube.com' },
  { title: '구글 (Google)', desc: '빠르고 정확한 전 세계 정보 검색 서비스', url: 'https://www.google.com' },
  { title: '다음 (Daum)', desc: '다양한 뉴스, 생활 정보 및 커뮤니티 서비스', url: 'https://www.daum.net' },
  { title: '카카오톡 웹 (KakaoTalk)', desc: '가족, 친구들과 간편하게 메시지 주고받기', url: 'https://web.kakaotalk.com' },
];

export function LinksScreen({ onBack, onHome, onSettings, onSpeak }: LinksScreenProps) {
  return (
    <>
      <TopBar title="유용한 사이트" onBack={onBack} onHome={onHome} onSettings={onSettings} onSpeak={onSpeak} />
      <div className="screen-body" style={{ padding: '16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ textAlign: 'center', margin: '4px 0 8px 0' }}>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
            자주 방문하는 포털 및 서비스를 새 창으로 열어 이용해 보세요.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {USEFUL_LINKS.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '18px 16px',
                textDecoration: 'none',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span className="link-card-title" style={{ fontSize: '16px', fontWeight: '700', color: 'var(--primary)' }}>
                  {link.title}
                </span>
                <span className="link-card-sub" style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                  {link.desc}
                </span>
              </div>
              <ExternalLink size={18} color="var(--primary)" style={{ flexShrink: 0 }} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
