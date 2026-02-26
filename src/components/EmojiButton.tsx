import { EmojiData } from "./api";
import { SelectedCard } from "../App";

interface EmojiButtonProps {
  emojiElement: EmojiData;
  index: number;
  handleClick: () => void;
  selectedCardEntry?: SelectedCard;
  matchedCardEntry?: SelectedCard;
}

function EmojiButton({
  emojiElement,
  index,
  handleClick,
  selectedCardEntry,
  matchedCardEntry,
}: EmojiButtonProps) {
  const btnContent =
    selectedCardEntry || matchedCardEntry ? emojiElement.emoji : "?";

  /**
   * conditionally add button style depending on whether a card is selected, matched or neither.
   */
  const getStyleAndAriaLabelBaseOnCardEntryStatus = (
    matchedCardEntry?: SelectedCard,
    selectedCardEntry?: SelectedCard,
  ) => {
    if (matchedCardEntry) {
      return {
        buttonStyle:
          "rotate-y-180 [backface-visibility:unset] bg-zinc-700 border-1 border-zinc-600 cursor-not-allowed",
        buttonAriaLabel: `${emojiElement.annotation}. Matched.`,
      };
    } else if (selectedCardEntry) {
      return {
        buttonStyle:
          "rotate-y-180 backface-hidden border-pink-950 shadow-[0_0_5px_1px_gray]",
        buttonAriaLabel: `${emojiElement.annotation}. Not matched yet.`,
      };
    } else {
      return {
        buttonStyle:
          "hover:border-pink-950 hover:shadow-[0_0_5px_1px_gray] focus:border-pink-950 focus:shadow-[0_0_5px_1px_gray] backface-hidden border-sky-100 cursor-pointer",
        buttonAriaLabel: "Card upside down",
      };
    }
  };

  const mappedStyleAndAriaLabel = getStyleAndAriaLabelBaseOnCardEntryStatus(
    matchedCardEntry,
    selectedCardEntry,
  );

  const onEmojiCardClick = () => {
    if (!selectedCardEntry) {
      handleClick();
    }
  };

  return (
    <button
      className={`bg-neutral-900 rounded-2xl text-teal-50 w-full h-25 text-[4rem] border-3 ${mappedStyleAndAriaLabel.buttonStyle}`}
      // if the user clicked the same card twice do nothing if not call "turnCard" function.
      onClick={onEmojiCardClick}
      /* To improve the user experience disable the emoji button whenever a memory card is matched.
       * Add a disabled attribute to the button and give it a value that is truthy when a card is matched, otherwise falsy.
       */
      disabled={!!matchedCardEntry}
      aria-label={`Position ${index + 1}: ${mappedStyleAndAriaLabel.buttonAriaLabel}`}
      aria-live="polite"
    >
      {btnContent}
    </button>
  );
}

export default EmojiButton;
