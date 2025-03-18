function MemoryCard({ handleClick, data }) {
  if (!data || data?.length === 0) {
    return <p>Data not available at the moment. Please try again later.</p>;
  }

  return (
    <ul className="card-container">
      {data.map((emojiElement, index) => (
        <li key={index}>
          <button onClick={handleClick}>{emojiElement.emoji}</button>
        </li>
      ))}
    </ul>
  );
}

export default MemoryCard;
