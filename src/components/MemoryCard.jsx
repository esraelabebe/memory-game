import EmojiButton from "./EmojiButton";

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
      ? "card-item--matched transform rotate-[rotateY(180deg)]"
      : selectedCardEntry
      ? "card-item--selected transform rotate-[rotateY(180deg)] transition duration-[600ms] transform-3d border-4 border-pink-950 shadow-[0_0_5px_1px_gray]"
      : "";

    return (
      <li key={index} className={`list-none ${cardStyle}`}>
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
