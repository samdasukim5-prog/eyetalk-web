export type ToneKey = 'pain' | 'warm' | 'cool' | 'call' | 'thanks' | 'wait' | undefined;

export interface MessageItem {
  id: string;
  label: string;
  subtitle?: string;      // 카드 하단 부제목
  icon: string;
  speech?: string;        // label과 다를 경우에만
  tone?: ToneKey;
  sub?: MessageItem[];
}

export const talkCategories: MessageItem[] = [
  {
    id: 'pain',
    label: '아파요',
    subtitle: '통증 부위·강도',
    icon: 'pain',
    tone: 'pain',
    sub: [
      {
        id: 'pain_head',
        label: '머리',
        subtitle: '두통·어지러움',
        icon: 'head',
        tone: 'pain',
        sub: [
          { id: 'pain_head_0',  label: '전혀 안 아파요', subtitle: '통증 없음',   icon: 'pain_0',  speech: '머리가 전혀 안 아파요',   tone: 'pain' },
          { id: 'pain_head_3',  label: '조금 아파요',   subtitle: '참을 만함',   icon: 'pain_3',  speech: '머리가 조금 아파요',       tone: 'pain' },
          { id: 'pain_head_5',  label: '보통 아파요',   subtitle: '신경 쓰임',   icon: 'pain_5',  speech: '머리가 보통 아파요',       tone: 'pain' },
          { id: 'pain_head_7',  label: '많이 아파요',   subtitle: '참기 힘듦',   icon: 'pain_7',  speech: '머리가 많이 아파요',       tone: 'pain' },
          { id: 'pain_head_10', label: '매우 심해요',   subtitle: '최대 통증',   icon: 'pain_10', speech: '머리가 매우 심하게 아파요', tone: 'pain' },
        ],
      },
      {
        id: 'pain_shoulder',
        label: '목·어깨',
        subtitle: '결림·뻐근',
        icon: 'shoulder',
        tone: 'pain',
        sub: [
          { id: 'pain_shoulder_0',  label: '전혀 안 아파요', subtitle: '통증 없음', icon: 'pain_0',  speech: '목·어깨가 전혀 안 아파요',   tone: 'pain' },
          { id: 'pain_shoulder_3',  label: '조금 아파요',   subtitle: '참을 만함', icon: 'pain_3',  speech: '목·어깨가 조금 아파요',       tone: 'pain' },
          { id: 'pain_shoulder_5',  label: '보통 아파요',   subtitle: '신경 쓰임', icon: 'pain_5',  speech: '목·어깨가 보통 아파요',       tone: 'pain' },
          { id: 'pain_shoulder_7',  label: '많이 아파요',   subtitle: '참기 힘듦', icon: 'pain_7',  speech: '목·어깨가 많이 아파요',       tone: 'pain' },
          { id: 'pain_shoulder_10', label: '매우 심해요',   subtitle: '최대 통증', icon: 'pain_10', speech: '목·어깨가 매우 심하게 아파요', tone: 'pain' },
        ],
      },
      {
        id: 'pain_arm',
        label: '팔',
        subtitle: '저림·욱신',
        icon: 'arm',
        tone: 'pain',
        sub: [
          { id: 'pain_arm_0',  label: '전혀 안 아파요', subtitle: '통증 없음', icon: 'pain_0',  speech: '팔이 전혀 안 아파요',   tone: 'pain' },
          { id: 'pain_arm_3',  label: '조금 아파요',   subtitle: '참을 만함', icon: 'pain_3',  speech: '팔이 조금 아파요',       tone: 'pain' },
          { id: 'pain_arm_5',  label: '보통 아파요',   subtitle: '신경 쓰임', icon: 'pain_5',  speech: '팔이 보통 아파요',       tone: 'pain' },
          { id: 'pain_arm_7',  label: '많이 아파요',   subtitle: '참기 힘듦', icon: 'pain_7',  speech: '팔이 많이 아파요',       tone: 'pain' },
          { id: 'pain_arm_10', label: '매우 심해요',   subtitle: '최대 통증', icon: 'pain_10', speech: '팔이 매우 심하게 아파요', tone: 'pain' },
        ],
      },
      {
        id: 'pain_leg',
        label: '다리',
        subtitle: '쥐어뜯음',
        icon: 'leg',
        tone: 'pain',
        sub: [
          { id: 'pain_leg_0',  label: '전혀 안 아파요', subtitle: '통증 없음', icon: 'pain_0',  speech: '다리가 전혀 안 아파요',   tone: 'pain' },
          { id: 'pain_leg_3',  label: '조금 아파요',   subtitle: '참을 만함', icon: 'pain_3',  speech: '다리가 조금 아파요',       tone: 'pain' },
          { id: 'pain_leg_5',  label: '보통 아파요',   subtitle: '신경 쓰임', icon: 'pain_5',  speech: '다리가 보통 아파요',       tone: 'pain' },
          { id: 'pain_leg_7',  label: '많이 아파요',   subtitle: '참기 힘듦', icon: 'pain_7',  speech: '다리가 많이 아파요',       tone: 'pain' },
          { id: 'pain_leg_10', label: '매우 심해요',   subtitle: '최대 통증', icon: 'pain_10', speech: '다리가 매우 심하게 아파요', tone: 'pain' },
        ],
      },
      {
        id: 'pain_back',
        label: '등',
        subtitle: '묵직·결림',
        icon: 'back',
        tone: 'pain',
        sub: [
          { id: 'pain_back_0',  label: '전혀 안 아파요', subtitle: '통증 없음', icon: 'pain_0',  speech: '등이 전혀 안 아파요',   tone: 'pain' },
          { id: 'pain_back_3',  label: '조금 아파요',   subtitle: '참을 만함', icon: 'pain_3',  speech: '등이 조금 아파요',       tone: 'pain' },
          { id: 'pain_back_5',  label: '보통 아파요',   subtitle: '신경 쓰임', icon: 'pain_5',  speech: '등이 보통 아파요',       tone: 'pain' },
          { id: 'pain_back_7',  label: '많이 아파요',   subtitle: '참기 힘듦', icon: 'pain_7',  speech: '등이 많이 아파요',       tone: 'pain' },
          { id: 'pain_back_10', label: '매우 심해요',   subtitle: '최대 통증', icon: 'pain_10', speech: '등이 매우 심하게 아파요', tone: 'pain' },
        ],
      },
      {
        id: 'pain_stomach',
        label: '배',
        subtitle: '속쓰림·복통',
        icon: 'stomach',
        tone: 'pain',
        sub: [
          { id: 'pain_stomach_0',  label: '전혀 안 아파요', subtitle: '통증 없음', icon: 'pain_0',  speech: '배가 전혀 안 아파요',   tone: 'pain' },
          { id: 'pain_stomach_3',  label: '조금 아파요',   subtitle: '참을 만함', icon: 'pain_3',  speech: '배가 조금 아파요',       tone: 'pain' },
          { id: 'pain_stomach_5',  label: '보통 아파요',   subtitle: '신경 쓰임', icon: 'pain_5',  speech: '배가 보통 아파요',       tone: 'pain' },
          { id: 'pain_stomach_7',  label: '많이 아파요',   subtitle: '참기 힘듦', icon: 'pain_7',  speech: '배가 많이 아파요',       tone: 'pain' },
          { id: 'pain_stomach_10', label: '매우 심해요',   subtitle: '최대 통증', icon: 'pain_10', speech: '배가 매우 심하게 아파요', tone: 'pain' },
        ],
      },
    ],
  },
  {
    id: 'phlegm',
    label: '가래 빼주세요',
    subtitle: '호흡 도움 요청',
    icon: 'lung',
    speech: '가래를 빼주세요',
  },
  {
    id: 'env',
    label: '환경',
    subtitle: 'TV·커튼·온도·침대',
    icon: 'home',
    sub: [
      {
        id: 'env_tv',
        label: 'TV',
        subtitle: '켜기·끄기',
        icon: 'tv',
        sub: [
          { id: 'env_tv_on',  label: 'TV 켜주세요', subtitle: '전원 ON',  icon: 'tv',      speech: 'TV를 켜주세요' },
          { id: 'env_tv_off', label: 'TV 꺼주세요', subtitle: '전원 OFF', icon: 'tv',      speech: 'TV를 꺼주세요', tone: 'cool' },
        ],
      },
      {
        id: 'env_curtain',
        label: '커튼',
        subtitle: '치기·걷기',
        icon: 'curtain',
        sub: [
          { id: 'env_curtain_close', label: '커튼 쳐주세요',   subtitle: '햇빛 차단',   icon: 'curtain', speech: '커튼을 쳐주세요',   tone: 'cool' },
          { id: 'env_curtain_open',  label: '커튼 걷어주세요', subtitle: '햇빛 들이기', icon: 'curtain', speech: '커튼을 걷어주세요', tone: 'warm' },
        ],
      },
      {
        id: 'env_temp',
        label: '온도',
        subtitle: '추워요·더워요',
        icon: 'thermo',
        tone: 'warm',
        sub: [
          { id: 'env_temp_cold', label: '추워요', subtitle: '온도를 올려주세요', icon: 'thermo', speech: '추워요. 온도를 올려주세요', tone: 'cool' },
          { id: 'env_temp_hot',  label: '더워요', subtitle: '온도를 내려주세요', icon: 'thermo', speech: '더워요. 온도를 내려주세요', tone: 'warm' },
        ],
      },
      {
        id: 'env_bed',
        label: '침대',
        subtitle: '자세 조절',
        icon: 'bed',
        tone: 'cool',
        sub: [
          { id: 'env_bed_head_up',   label: '머리를 올려주세요',   subtitle: '상체 ↑', icon: 'bed', speech: '머리를 올려주세요' },
          { id: 'env_bed_head_down', label: '머리를 내려주세요',   subtitle: '상체 ↓', icon: 'bed', speech: '머리를 내려주세요' },
          { id: 'env_bed_leg_up',    label: '다리를 올려주세요',   subtitle: '하체 ↑', icon: 'bed', speech: '다리를 올려주세요' },
          { id: 'env_bed_leg_down',  label: '다리를 내려주세요',   subtitle: '하체 ↓', icon: 'bed', speech: '다리를 내려주세요' },
          { id: 'env_bed_up',        label: '높이를 올려주세요',   subtitle: '침대 ↑', icon: 'bed', speech: '침대 높이를 올려주세요' },
          { id: 'env_bed_down',      label: '높이를 내려주세요',   subtitle: '침대 ↓', icon: 'bed', speech: '침대 높이를 내려주세요' },
          { id: 'env_bed_right',     label: '오른쪽으로 눕혀주세요', subtitle: '체위 변경', icon: 'bed', speech: '오른쪽으로 눕혀주세요' },
          { id: 'env_bed_left',      label: '왼쪽으로 눕혀주세요',  subtitle: '체위 변경', icon: 'bed', speech: '왼쪽으로 눕혀주세요' },
          { id: 'env_bed_adjust',    label: '자세가 불편해요',      subtitle: '전체 조정', icon: 'bed', speech: '자세가 불편해요. 조정해 주세요' },
        ],
      },
    ],
  },
  {
    id: 'request',
    label: '요청',
    subtitle: '물·간호 요청',
    icon: 'hand',
    sub: [
      { id: 'req_water',    label: '물',           subtitle: '마시고 싶어요',  icon: 'water',    speech: '물을 주세요' },
      { id: 'req_blanket',  label: '담요',         subtitle: '덮고 싶어요',    icon: 'blanket',  speech: '담요를 주세요' },
      { id: 'req_toilet',   label: '화장실',       subtitle: '이동 요청',      icon: 'toilet',   speech: '화장실에 가고 싶어요' },
      { id: 'req_phone',    label: '전화',         subtitle: '연락 요청',      icon: 'phone',    speech: '전화를 해주세요' },
      { id: 'req_family',   label: '가족 호출',    subtitle: '보호자 연락',    icon: 'family',   speech: '가족을 불러주세요' },
      { id: 'req_medicine', label: '약',           subtitle: '투약 요청',      icon: 'medicine', speech: '약을 주세요' },
    ],
  },
  {
    id: 'feel',
    label: '감정',
    subtitle: '기분·상태',
    icon: 'heart',
    tone: 'warm',
    sub: [
      { id: 'feel_good',    label: '좋아요',   subtitle: '컨디션 양호',  icon: 'good',    speech: '좋아요',   tone: 'thanks' },
      { id: 'feel_bad',     label: '힘들어요', subtitle: '고통·피로',    icon: 'bad',     speech: '힘들어요', tone: 'pain' },
      { id: 'feel_scared',  label: '무서워요', subtitle: '불안·공포',    icon: 'scared',  speech: '무서워요', tone: 'pain' },
      { id: 'feel_lonely',  label: '외로워요', subtitle: '옆에 있어줘요', icon: 'lonely', speech: '외로워요', tone: 'warm' },
      { id: 'feel_bored',   label: '지루해요', subtitle: '심심해요',     icon: 'bored',   speech: '지루해요', tone: 'cool' },
    ],
  },
  {
    id: 'hi',
    label: '인사',
    subtitle: '안녕·감사',
    icon: 'wave',
    tone: 'warm',
    sub: [
      { id: 'hi_hello',  label: '안녕하세요',   subtitle: '인사',     icon: 'hello', speech: '안녕하세요' },
      { id: 'hi_bye',    label: '안녕히 가세요', subtitle: '작별',    icon: 'bye',   speech: '안녕히 가세요' },
      { id: 'hi_thanks', label: '감사합니다',   subtitle: '감사',     icon: 'thanks', speech: '감사합니다', tone: 'thanks' },
      { id: 'hi_sorry',  label: '죄송합니다',   subtitle: '사과',     icon: 'sorry',  speech: '죄송합니다' },
      { id: 'hi_yes',    label: '네',           subtitle: '긍정',     icon: 'yes',    speech: '네' },
      { id: 'hi_no',     label: '아니요',       subtitle: '부정',     icon: 'no',     speech: '아니요' },
    ],
  },
];

export const quickButtons: MessageItem[] = [
  { id: 'quick_yes',    label: '네',           subtitle: '긍정',         icon: 'yes',   speech: '네',               tone: 'thanks' },
  { id: 'quick_no',     label: '아니오',       subtitle: '부정',         icon: 'no',    speech: '아니오',           tone: 'wait' },
  { id: 'quick_repeat', label: '다시 말해주세요', subtitle: '반복 요청', icon: 'voice', speech: '다시 말해주세요',  tone: 'cool' },
  { id: 'quick_nurse',  label: '호출',         subtitle: '간호사 호출',  icon: 'bell',  speech: '간호사를 불러주세요', tone: 'call' },
];
