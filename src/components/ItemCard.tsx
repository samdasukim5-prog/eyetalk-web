import type { MessageItem } from '../content/messages';
import { ItemIcon } from './ItemIcon';

const TONE_COLORS: Record<string, string> = {
  pain: '#C66818',
  warm: '#B5740C',
  cool: '#1E8E6E',
  call: '#D94040',
  thanks: '#6B8B2C',
  wait: '#44546B',
};

interface ItemCardProps {
  item: MessageItem;
  onClick: () => void;
}

export function ItemCard({ item, onClick }: ItemCardProps) {
  const toneClass = item.tone ? ` tone-${item.tone}` : '';
  const iconColor = item.tone ? TONE_COLORS[item.tone] : undefined;

  return (
    <button className={`item-card${toneClass}`} onClick={onClick}>
      <div className="card-icon">
        <ItemIcon icon={item.icon} size={48} color={iconColor} />
      </div>
      <div className="card-title">{item.label}</div>
      {item.subtitle && <div className="card-sub">{item.subtitle}</div>}
    </button>
  );
}
