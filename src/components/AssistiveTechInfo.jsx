import "./AssistiveTechInfo.css";

function AssistiveTechInfo({ emojisData, matchedCards }) {
  return (
    <section className="sr-only">
      <h2>Game Status</h2>
      <p>Number of matched cards: {matchedCards.length / 2}</p>
      <p>
        Number of cards left to match: {emojisData.length - matchedCards.length}
      </p>
    </section>
  );
}
export default AssistiveTechInfo;
