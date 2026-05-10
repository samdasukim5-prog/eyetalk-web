import { TopBar } from '../components/TopBar';
import { BottomBar } from '../components/BottomBar';
import { ItemCard } from '../components/ItemCard';
import { talkCategories, quickButtons } from '../content/messages';
import type { MessageItem } from '../content/messages';
import type { SubScreen } from '../App';

interface MainScreenProps {
  onSpeak: (text: string) => void;
  onPush: (screen: SubScreen) => void;
  onSettings: () => void;
}

export function MainScreen({ onSpeak, onPush, onSettings }: MainScreenProps) {
  const handleCard = (item: MessageItem) => {
    if (item.sub) {
      onPush({ id: 'subitems', title: item.label, items: item.sub });
    } else {
      onSpeak(item.speech ?? item.label);
    }
  };

  return (
    <>
      <TopBar showBrand onSpeak={onSpeak} onSettings={onSettings} />
      <div className="screen-body">
        <div className="grid-2x3">
          {talkCategories.map(item => (
            <ItemCard key={item.id} item={item} onClick={() => handleCard(item)} />
          ))}
        </div>
      </div>
      <BottomBar items={quickButtons} onSelect={item => onSpeak(item.speech ?? item.label)} />
    </>
  );
}
