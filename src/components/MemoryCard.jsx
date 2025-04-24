import EmojiButton from "./EmojiButton";

function MemoryCard({ handleClick, data }) {
  if (!data || data?.length === 0) {
    return <p>Data not available at the moment. Please try again later.</p>;
  }

  return (
    <ul className="card-container">
      {data.map((emojiElement, index) => (
        <li key={index}>
          <EmojiButton
            content={emojiElement.emoji}
            style="btn btn--emoji"
            handleClick={() => handleClick(emojiElement.emoji, index)}
          />
        </li>
      ))}
    </ul>
  );
}

export default MemoryCard;
