function EmojiButton({
  content,
  style,
  handleClick,
  selectedCardEntry,
  matchedCardEntry,
}) {
  let btnContent =
    selectedCardEntry || matchedCardEntry
      ? (btnContent = content)
      : (btnContent = "?");
  return (
    <button className={style} onClick={handleClick}>
      {btnContent}
    </button>
  );
}
export default EmojiButton;
