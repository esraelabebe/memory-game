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
  const [bestScore, setBestScore] = useState(null);

  // Helper: generate dynamic key for localStorage
  const getStorageKey = (formData) => `bestScoreLevel${formData.number}`;

  // Load best score for current level when formData changes
  useEffect(() => {
    const key = getStorageKey(formData);
    const stored = localStorage.getItem(key);
    setBestScore(stored ? JSON.parse(stored) : null);
  }, [formData]); // Dependency array ensures this runs when 'data' changes.

  // Save new best score if current time is better
  useEffect(() => {
    if (typeof time !== "number") return;

    const key = getStorageKey(formData);
    const stored = localStorage.getItem(key);
    const storedBest = stored ? JSON.parse(stored) : null;

    if (storedBest === null || time < storedBest) {
      localStorage.setItem(key, JSON.stringify(time));
      setBestScore(time);
    }
  }, [time, formData]);

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
      className="flex flex-col items-center text-center gap-6 bg-neutral-900 text-teal-50 rounded-2xl py-8 px-12 border border-sky-100 m-7 shadow-[0_0_3px_1px_white]"
      ref={divRef}
      tabIndex={-1}
    >
      <p className="text-2xl">You've matched all the memory cards! 🎉</p>
      <p>Built by Esrael Abebe</p>
      <div className="wrapper--score">
        {/** Show timer and best score after all cards are matched */}
        <div className="flex gap-3 font-bold text-pink-500">
          <label id="time">Time:</label>
          <Timer
            id="time"
            time={time}
            setTime={setTime}
            bestScore={bestScore}
          />
        </div>
        <div className="flex gap-3 font-bold text-pink-500">
          <label id="best-score">Personal best for current level:</label>
          <p>{formatTime(bestScore)}</p>
        </div>
      </div>
      <div className="flex gap-5 flex-col sm:flex-row sm:gap-12">
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
