import "./MemoryCardEmojiButton.css";

function EmojiButton({
  content,
  handleClick,
  selectedCardEntry,
  matchedCardEntry,
}) {
  const btnContent = selectedCardEntry || matchedCardEntry ? content : "?";

    /**
     * conditionally add button style depending on whether a card is selected, matched or neither.
     */
  const btnStyle = matchedCardEntry
  ? "btn--emoji__back--selected"
  : selectedCardEntry
  ? "btn--emoji__back--matched"
  : "btn--emoji__front";

  return (
    <button className={`btn btn--emoji ${btnStyle}`} onClick={handleClick}>
      {btnContent}
    </button>
  );
}
export default EmojiButton;
