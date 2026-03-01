import { SelectedCard } from "../App";
import { EmojiData } from "./api";
import EmojiButton from "./EmojiButton";

interface MemoryCardProps {
  data: EmojiData[];
  handleClick:(emojiElement: string, index: number) => void;
  selectedCards: SelectedCard[];
  matchedCards: SelectedCard[];
}

function MemoryCard({  data, handleClick, selectedCards, matchedCards }: MemoryCardProps) {
  if (!data || data?.length === 0) {
    return <p>Data not available at the moment. Please try again later.</p>;
  }

  const cardEl = data.map((emojiElement, index) => {
    const selectedCardEntry = selectedCards.find(
      (emoji) => emoji.index === index
    );
    const matchedCardEntry = matchedCards.find(
      (emoji) => emoji.index === index
    );

    /**
     * conditionally assign card elements a value depending on whether a card is selected, matched or neither.
     */

  const assignCardElementStyleBaseOnCardEntryStatus = (matchedCardEntry?: SelectedCard, selectedCardEntry?: SelectedCard) => {
    if(matchedCardEntry){
      return "rotate-y-180";
    } else if(selectedCardEntry) {
      return "rotate-y-180 transition duration-[600ms] transform-3d rounded-2xl border-pink-950";
    } else {
      return "";
    }
  }
  const assignCardElementStyle = assignCardElementStyleBaseOnCardEntryStatus(matchedCardEntry, selectedCardEntry);

    return (
      <li key={index} className={`list-none ${assignCardElementStyle}`}>
        <EmojiButton
          emojiElement={emojiElement}
          index={index}
          handleClick={() => handleClick(emojiElement.emoji, index)}
          selectedCardEntry={selectedCardEntry}
          matchedCardEntry={matchedCardEntry}
        />
      </li>
    );
  });

  return (
    <ul className="pl-0 grid [grid-template-columns:repeat(auto-fit,minmax(100px,1fr))] gap-4 w-full m-7">
      {cardEl}
    </ul>
  );
}

export default MemoryCard;
