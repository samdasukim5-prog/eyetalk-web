import type { MessageItem } from '../content/messages';
import { ItemIcon } from './ItemIcon';

interface BottomBarProps {
  items: MessageItem[];
  onSelect: (item: MessageItem) => void;
}

export function BottomBar({ items, onSelect }: BottomBarProps) {
  return (
    <div className="bottombar">
      {items.map(item => (
        <button
          key={item.id}
          className={`quick-pill${item.tone ? ` tone-${item.tone}` : ''}`}
          onClick={() => onSelect(item)}
        >
          <ItemIcon icon={item.icon} size={28} />
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
}
