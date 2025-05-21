import EmojiButton from "./EmojiButton";
import "./MemoryCardEmojiButton.css";

function MemoryCard({ handleClick, data, selectedCards, matchedCards }) {
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
    const cardStyle = matchedCardEntry
      ? "card-item--matched"
      : selectedCardEntry
      ? "card-item--selected"
      : "";

    return (
      <li key={index} className={`card-item ${cardStyle}`}>
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

  return <ul className="card-container">{cardEl}</ul>;
}

export default MemoryCard;
