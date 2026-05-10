import {
  IconEye, IconGame, IconLink, IconSettings, IconKeyboard,
  IconBell, IconPain, IconHeart, IconWait, IconBack,
  IconHead, IconShoulder, IconArm, IconLeg, IconBackBody, IconStomach,
  IconLung, IconHome, IconHand, IconWave, IconCheck, IconVoice,
  IconTV, IconCurtain, IconThermo, IconBed,
} from './Icons';

const PAIN_EMOJI: Record<string, string> = {
  pain_0: '😊', pain_3: '🙂', pain_5: '😐', pain_7: '😣', pain_10: '😭',
};

type IconComp = React.ComponentType<{ size?: number; color?: string }>;

const MAP: Record<string, IconComp> = {
  eye: IconEye, game: IconGame, link: IconLink, settings: IconSettings,
  keyboard: IconKeyboard, bell: IconBell, pain: IconPain, heart: IconHeart,
  wait: IconWait, back: IconBackBody, head: IconHead, shoulder: IconShoulder,
  arm: IconArm, leg: IconLeg, stomach: IconStomach,
  lung: IconLung, home: IconHome, hand: IconHand, wave: IconWave,
  check: IconCheck, voice: IconVoice, tv: IconTV, curtain: IconCurtain,
  thermo: IconThermo, bed: IconBed,
  talk: IconEye,
  good: IconHeart, bad: IconPain, scared: IconPain,
  lonely: IconHeart, bored: IconWait,
  thanks: IconHeart, hello: IconWave, bye: IconWave, sorry: IconWave,
  yes: IconCheck, no: IconBack,
  water: IconHand, blanket: IconHand, toilet: IconHand,
  phone: IconHand, family: IconHand, medicine: IconHand,
};

export function ItemIcon({ icon, size = 26, color }: { icon: string; size?: number; color?: string }) {
  if (icon in PAIN_EMOJI) {
    return <span style={{ fontSize: size * 0.9, lineHeight: 1 }}>{PAIN_EMOJI[icon]}</span>;
  }
  const Comp = MAP[icon] ?? IconHeart;
  return <Comp size={size} color={color} />;
}
