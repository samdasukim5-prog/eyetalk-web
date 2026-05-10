import { TopBar } from '../components/TopBar';
import { BottomBar } from '../components/BottomBar';
import { ItemCard } from '../components/ItemCard';
import { quickButtons } from '../content/messages';
import type { MessageItem } from '../content/messages';
import type { SubScreen } from '../App';

interface SubItemsScreenProps {
  title: string;
  items: MessageItem[];
  banner?: string;
  onSpeak: (text: string) => void;
  onBack: () => void;
  onPush: (screen: SubScreen) => void;
}

export function SubItemsScreen({ title, items, banner, onSpeak, onBack, onPush }: SubItemsScreenProps) {
  const handleCard = (item: MessageItem) => {
    if (item.sub) {
      const nextBanner = item.tone === 'pain' ? `통증이 있는 부위: ${item.label}` : undefined;
      onPush({ id: 'subitems', title: item.label, items: item.sub, banner: nextBanner });
    } else {
      onSpeak(item.speech ?? item.label);
    }
  };

  return (
    <>
      <TopBar title={title} onBack={onBack} onSpeak={onSpeak} />
      {banner && (
        <div className="banner">
          <div className="banner-dot" />
          <span>{banner}</span>
        </div>
      )}
      <div className="screen-body">
        <div className="grid-2x3">
          {items.map(item => (
            <ItemCard key={item.id} item={item} onClick={() => handleCard(item)} />
          ))}
        </div>
      </div>
      <BottomBar items={quickButtons} onSelect={item => onSpeak(item.speech ?? item.label)} />
    </>
  );
}
