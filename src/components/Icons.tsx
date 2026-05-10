interface P { size?: number; color?: string; strokeWidth?: number; }
const I = ({ size = 24, color = 'currentColor', sw = 4, children }: P & { sw?: number; children: React.ReactNode }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke={color}
    strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {children}
  </svg>
);

export const IconEye = (p: P) => <I {...p} sw={p.strokeWidth ?? 4}>
  <path d="M4 32c6-14 14-22 28-22s22 8 28 22c-6 14-14 22-28 22S10 46 4 32z"/>
  <circle cx="32" cy="32" r="9"/>
  <circle cx="32" cy="32" r="4" fill={p.color ?? 'currentColor'} stroke="none"/>
</I>;

export const IconGame = (p: P) => <I {...p} sw={p.strokeWidth ?? 4}>
  <path d="M12 22h40a8 8 0 0 1 8 8v6a8 8 0 0 1-14.4 4.8l-2-2.7a4 4 0 0 0-3.2-1.6H23.6a4 4 0 0 0-3.2 1.6l-2 2.7A8 8 0 0 1 4 36v-6a8 8 0 0 1 8-8z"/>
  <path d="M17 30v8M13 34h8"/>
  <circle cx="44" cy="31" r="3.5" fill={p.color ?? 'currentColor'} stroke="none"/>
  <circle cx="50" cy="35" r="3.5" fill={p.color ?? 'currentColor'} stroke="none"/>
</I>;

export const IconLink = (p: P) => <I {...p} sw={p.strokeWidth ?? 4}>
  <circle cx="32" cy="32" r="24"/>
  <path d="M8 32h48M32 8c-8 6-13 14-13 24s5 18 13 24M32 8c8 6 13 14 13 24s-5 18-13 24"/>
</I>;

export const IconSettings = (p: P) => <I {...p} sw={p.strokeWidth ?? 4}>
  <circle cx="32" cy="32" r="9"/>
  <path d="M32 4v8M32 52v8M4 32h8M52 32h8M12.7 12.7l5.7 5.7M45.6 45.6l5.7 5.7M12.7 51.3l5.7-5.7M45.6 18.4l5.7-5.7"/>
</I>;

export const IconKeyboard = (p: P) => <I {...p} sw={p.strokeWidth ?? 4}>
  <rect x="4" y="14" width="56" height="36" rx="8"/>
  <path d="M14 26h4M24 26h4M34 26h4M44 26h4M14 35h4M24 35h4M34 35h4M44 35h4M20 44h24"/>
</I>;

export const IconBell = (p: P) => <I {...p} sw={p.strokeWidth ?? 4}>
  <path d="M12 44V28a20 20 0 0 1 40 0v16l5 5H7l5-5z"/>
  <path d="M24 53a8 8 0 0 0 16 0"/>
</I>;

export const IconPain = (p: P) => <I {...p} sw={p.strokeWidth ?? 4}>
  <path d="M32 6c-4 9-12 14-12 24a12 12 0 0 0 24 0c0-10-8-15-12-24z"/>
  <path d="M27 30v8M27 30l-4-4M27 30l4-4"/>
</I>;

export const IconHeart = (p: P) => <I {...p} sw={p.strokeWidth ?? 4}>
  <path d="M32 54S8 40 8 23a12 12 0 0 1 22-6.7A12 12 0 0 1 56 23c0 17-24 31-24 31z"/>
</I>;

export const IconWait = (p: P) => <I {...p} sw={p.strokeWidth ?? 4}>
  <circle cx="32" cy="32" r="24"/>
  <path d="M32 16v16l11 7"/>
</I>;

export const IconBack = (p: P) => <I {...p} sw={p.strokeWidth ?? 5}>
  <path d="M42 12L22 32l20 20"/>
</I>;

export const IconHead = (p: P) => <I {...p} sw={p.strokeWidth ?? 4}>
  <path d="M20 20a12 12 0 0 1 24 0v8a10 10 0 0 1-2 6.5V42a4 4 0 0 0 4 4v4H18v-4a4 4 0 0 0 4-4v-7.5A10 10 0 0 1 20 28z"/>
  <circle cx="27" cy="24" r="2.5" fill={p.color ?? 'currentColor'} stroke="none"/>
  <circle cx="37" cy="24" r="2.5" fill={p.color ?? 'currentColor'} stroke="none"/>
</I>;

export const IconShoulder = (p: P) => <I {...p} sw={p.strokeWidth ?? 4}>
  <circle cx="32" cy="14" r="8"/>
  <path d="M14 40c2-9 9-14 18-14s16 5 18 14"/>
  <path d="M6 48c5-2 9-4 16-4M58 48c-5-2-9-4-16-4"/>
</I>;

export const IconArm = (p: P) => <I {...p} sw={p.strokeWidth ?? 4}>
  <circle cx="24" cy="10" r="5" fill={p.color ?? 'currentColor'} stroke="none"/>
  <path d="M24 15c0 7 4 11 6 17s2 13-2 19-2 9 4 13"/>
  <circle cx="32" cy="58" r="5" fill={p.color ?? 'currentColor'} stroke="none"/>
</I>;

export const IconLeg = (p: P) => <I {...p} sw={p.strokeWidth ?? 4}>
  <circle cx="28" cy="8" r="5" fill={p.color ?? 'currentColor'} stroke="none"/>
  <path d="M28 13c-2 8 0 16 2 22s4 13 0 19-2 7 0 8"/>
  <path d="M20 62h16"/>
</I>;

export const IconBackBody = (p: P) => <I {...p} sw={p.strokeWidth ?? 4}>
  <circle cx="32" cy="12" r="8"/>
  <path d="M20 24h24l-2 32H22z"/>
  <path d="M32 30v18M26 35h12M26 42h12"/>
</I>;

export const IconStomach = (p: P) => <I {...p} sw={p.strokeWidth ?? 4}>
  <path d="M16 24c0-6 7-11 16-11s16 5 16 11v14c0 10-7 17-16 17S16 48 16 38z"/>
  <path d="M25 36c1 3 4 5 7 5s6-2 7-5"/>
</I>;

export const IconLung = (p: P) => <I {...p} sw={p.strokeWidth ?? 4}>
  <path d="M32 8v22"/>
  <path d="M32 18c-7 0-18 7-20 17-2 9 3 18 12 18 5 0 8-4 8-9V18"/>
  <path d="M32 18c7 0 18 7 20 17 2 9-3 18-12 18-5 0-8-4-8-9V18"/>
</I>;

export const IconHome = (p: P) => <I {...p} sw={p.strokeWidth ?? 4}>
  <path d="M6 30L32 8l26 22v28H42V42H22v18H6z"/>
</I>;

export const IconHand = (p: P) => <I {...p} sw={p.strokeWidth ?? 4}>
  <path d="M24 36V16a6 6 0 0 1 12 0v20"/>
  <path d="M36 20a6 6 0 0 1 12 0v14"/>
  <path d="M12 38a6 6 0 0 1 12-2"/>
  <path d="M48 26a4 4 0 0 1 4 4v8c0 12-9 20-20 20-11 0-20-8-20-18V38"/>
</I>;

export const IconWave = (p: P) => <I {...p} sw={p.strokeWidth ?? 4}>
  <path d="M22 14c0 10 6 14 6 22s-6 12-6 22M32 10c0 10 6 14 6 24s-6 14-6 24M42 14c0 10 6 14 6 22s-6 12-6 22"/>
</I>;

export const IconCheck = (p: P) => <I {...p} sw={p.strokeWidth ?? 5.5}>
  <path d="M10 34l16 16L54 16"/>
</I>;

export const IconVoice = (p: P) => <I {...p} sw={p.strokeWidth ?? 4}>
  <rect x="22" y="6" width="20" height="30" rx="10"/>
  <path d="M12 34c0 11 9 20 20 20s20-9 20-20"/>
  <path d="M32 54v8M22 62h20"/>
</I>;

export const IconTV = (p: P) => <I {...p} sw={p.strokeWidth ?? 4}>
  <rect x="4" y="16" width="56" height="36" rx="8"/>
  <path d="M20 58h24M32 52v6M16 8l16 12M48 8 32 20"/>
</I>;

export const IconCurtain = (p: P) => <I {...p} sw={p.strokeWidth ?? 4}>
  <path d="M6 8h52"/>
  <path d="M14 8c0 14-6 20-6 30s6 14 6 22"/>
  <path d="M50 8c0 14 6 20 6 30s-6 14-6 22"/>
  <path d="M32 8v10"/>
  <circle cx="32" cy="8" r="4" fill={p.color ?? 'currentColor'} stroke="none"/>
</I>;

export const IconThermo = (p: P) => <I {...p} sw={p.strokeWidth ?? 4}>
  <path d="M32 8a8 8 0 0 1 8 8v23a12 12 0 1 1-16 0V16a8 8 0 0 1 8-8z"/>
  <circle cx="32" cy="48" r="5" fill={p.color ?? 'currentColor'} stroke="none"/>
  <path d="M40 22h8M40 29h6M40 36h8"/>
</I>;

export const IconBed = (p: P) => <I {...p} sw={p.strokeWidth ?? 4}>
  <path d="M6 46V22"/>
  <rect x="6" y="34" width="52" height="12" rx="5"/>
  <path d="M6 52v6M58 52v6M58 28H28a6 6 0 0 0-6 6v2"/>
  <circle cx="18" cy="24" r="6"/>
</I>;
