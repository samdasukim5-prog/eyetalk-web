export const colors = {
  primary: '#1F6FB2',
  primaryDark: '#155A93',
  primaryLight: '#E4EFF9',
  background: '#F4F7FB',
  surface: '#FFFFFF',
  text: '#11233A',
  textSecondary: '#44546B',
  border: '#DCE5EE',
  success: '#1E8E6E',
  tones: {
    pain:   { bg: '#FBE0D0', fg: '#C66818', border: '#F0AD7E' },
    warm:   { bg: '#FBEFD8', fg: '#B5740C', border: '#F5D796' },
    cool:   { bg: '#DCEFE5', fg: '#1E8E6E', border: '#A8D9C3' },
    call:   { bg: '#FBE7E7', fg: '#D94040', border: '#E08585' },
    thanks: { bg: '#E8F0D6', fg: '#6B8B2C', border: '#B8D07A' },
    wait:   { bg: '#E5E9EE', fg: '#44546B', border: '#B0BECB' },
  },
} as const;

export type ToneKey = keyof typeof colors.tones;
