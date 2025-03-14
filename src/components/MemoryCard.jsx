function MemoryCard({ handleClick, data }) {
  const emojiEl = data.map((emojiElement, index) => (
    <li key={index}>
      <button onClick={handleClick}>{emojiElement.emoji}</button>
    </li>
  ));
  return <ul className="card-container">{emojiEl}</ul>;
}

export default MemoryCard;
