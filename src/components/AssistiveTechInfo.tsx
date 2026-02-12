// Define the shape of the props
interface AssistiveTechInfoProps {
  // Assuming emojisData is an array of objects or strings
  emojisData: any[];
  // Assuming matchedCards contains IDs or strings of matched cards
  matchedCards: any[];
}

const AssistiveTechInfo = ({ emojisData, matchedCards } :AssistiveTechInfoProps) =>  {
  return (
    /* Screen reader only ===========================
   to hide the code visually and keep it accessible to assistive technologies
   ============================*/
    <section
      className="absolute! w-px! h-px! m-[-1px]! p-0! overflow-hidden! whitespace-nowrap! border-0! [clip:rect(1px,1px,1px,1px)]! [clip-path:inset(50%)]! [-webkit-clip-path:inset(50%)]!"
      aria-live="polite"
      aria-atomic="true"
    >
      <h2>Game Status</h2>
      <p>Number of matched cards: {matchedCards.length / 2}</p>
      <p>
        Number of cards left to match: {emojisData.length - matchedCards.length}
      </p>
    </section>
  );
}
export default AssistiveTechInfo;
