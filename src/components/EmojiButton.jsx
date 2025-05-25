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
    <button
      className={`btn btn--emoji ${btnStyle}`}
      //if the user clicked the same card twice do nothing if not call "turnCard" function.
      onClick={selectedCardEntry ? null : handleClick}
      /*To improve the user experience disable the emoji button whenever a memory card is matched.
      Add a disabled attribute to the button and give it a value that is truthy when a card is matched, otherwise falsy.
      */
      disabled={matchedCardEntry}
    >
      {btnContent}
    </button>
  );
}
export default EmojiButton;
