import "./EmojiButton.css";

function EmojiButton({
  emojiElement,
  index,
  handleClick,
  selectedCardEntry,
  matchedCardEntry,
}) {
  const btnContent =
    selectedCardEntry || matchedCardEntry ? emojiElement.emoji : "?";

  /**
   * conditionally add button style depending on whether a card is selected, matched or neither.
   */
  const btnStyle = matchedCardEntry
    ? "btn--emoji__back--matched"
    : selectedCardEntry
    ? "btn--emoji__back--selected"
    : "btn--emoji__front";

  /**
   * conditionally an aria-label value depending on whether the card is matched, selected or neither.
   */
  const btnAria = matchedCardEntry
    ? `${emojiElement.annotation}. Matched.`
    : selectedCardEntry
    ? `${emojiElement.annotation}. Not matched yet.`
    : "Card upside down";

  return (
    <button
      className={`btn btn--emoji ${btnStyle}`}
      // if the user clicked the same card twice do nothing if not call "turnCard" function.
      onClick={selectedCardEntry ? null : handleClick}
      /* To improve the user experience disable the emoji button whenever a memory card is matched.
       * Add a disabled attribute to the button and give it a value that is truthy when a card is matched, otherwise falsy.
       */
      disabled={matchedCardEntry}
      aria-label={`Position ${index + 1}: ${btnAria}`}
      aria-live="polite"
    >
      {btnContent}
    </button>
  );
}
export default EmojiButton;
