import { useRef, useEffect, useState } from "react";
import RegularButton from "./RegularButton";
import Level from "./Level";
import Timer from "./Timer";
import { formatTime } from "./format-time";

function GameOver({
  handleClick,
  formData,
  setFormData,
  startGame,
  resetGame,
  time,
  setTime,
}) {
  const [bestScore, setBestScore] = useState(() => {
    const stored = localStorage.getItem("BestScoreData");
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    if (typeof time === "number" && (bestScore === null || time < bestScore)) {
      setBestScore(time);
      // Store data in localStorage whenever 'data' changes
      localStorage.setItem("BestScoreData", JSON.stringify(time));
    }
  }, [time, bestScore]); // Dependency array ensures this runs when 'data' changes

  /**
   * Add focus to this new DOM node and prompt screen readers to read its content
   * aloud as soon as it renders.
   */
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.focus();
  }, []);

  return (
    <div
      class="flex flex-col items-center text-center gap-6 bg-neutral-900 text-teal-50 rounded-2xl py-8 px-12 border border-sky-100 m-7 shadow-[0_0_3px_1px_white]"
      ref={divRef}
      tabIndex={-1}
    >
      <p class="text-2xl">You've matched all the memory cards! 🎉</p>
      <p>Built by Esrael Abebe</p>
      <div className="wrapper--score">
        {/** Show timer and best score after all cards are matched */}
        <div class="flex gap-3 font-bold text-pink-500">
          <label id="time">Time:</label>
          <Timer
            id="time"
            time={time}
            setTime={setTime}
            bestScore={bestScore}
          />
        </div>
        <div class="flex gap-3 font-bold text-pink-500">
          <label id="best-score">Personal best:</label>
          <p>{formatTime(bestScore)}</p>
        </div>
      </div>
      <div class="flex gap-5 flex-col sm:flex-row sm:gap-12">
        <Level
          formData={formData}
          setFormData={setFormData}
          startGame={startGame}
          resetGame={resetGame}
        />
        {/**
         * Render an instance of the "RegularButton" component
         * This button should reset the game and return the user to the initial form displayed at the start.
         */}
        <RegularButton handleClick={handleClick}>Play again</RegularButton>
      </div>
    </div>
  );
}
export default GameOver;
