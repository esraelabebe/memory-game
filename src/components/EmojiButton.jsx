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
    ? "rotate-y-180 [backface-visibility:unset] bg-zinc-700 border-1 border-zinc-600 cursor-not-allowed"
    : selectedCardEntry
    ? "rotate-y-180 backface-hidden border-pink-950 shadow-[0_0_5px_1px_gray]"
    : "hover:border-pink-950 hover:shadow-[0_0_5px_1px_gray] focus:border-pink-950 focus:shadow-[0_0_5px_1px_gray] backface-hidden border-sky-100 cursor-pointer";

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
      className={`bg-neutral-900 rounded-2xl text-teal-50 w-full h-25 text-[4rem] border-3 ${btnStyle}`}
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
