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
    return (
      <li key={index}>
        <EmojiButton
          content={emojiElement.emoji}
          style="btn btn--emoji"
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
