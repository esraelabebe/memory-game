import { useRef, useEffect, useState } from "react";
import RegularButton from "../../components/RegularButton";
import Level from "./Level";
import Timer from "../../components/timer/Timer";
import { formatTime } from "../../utils/format-time";
import { FormData } from "../form/Form";
import { HandleSubmit } from "../../components/RegularButton";

interface GameOverProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  startGame: HandleSubmit;
  resetGame: () => void;
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
}

function GameOver({
  formData,
  setFormData,
  startGame,
  resetGame,
  time,
  setTime,
}: GameOverProps) {
  const [bestScore, setBestScore] = useState<number | null>(null);

  // Helper: generate dynamic key for localStorage
  const getStorageKey = (formData: FormData): string =>
    `bestScoreLevel${formData.number}`;

  // Save new best score if current time is better
  useEffect(() => {
    const key = getStorageKey(formData);
    const stored = localStorage.getItem(key);
    const storedBest = stored ? JSON.parse(stored) : null;
    setBestScore(storedBest);

    if (typeof time !== "number") return;

    if (storedBest === null || time < storedBest) {
      localStorage.setItem(key, JSON.stringify(time));
      setBestScore(time);
    }
  }, [time, formData]); // Dependency array ensures this runs when 'data' changes.

  /**
   * Add focus to this new DOM node and prompt screen readers to read its content
   * aloud as soon as it renders.
   */
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    divRef.current?.focus();
  }, []);

  const levelMap = {
    10: "Level-1",
    20: "Level-2",
    30: "Level-3",
    40: "Level-4",
    50: "Level-5",
  };

  const level = levelMap[formData.number];

  return (
    <div
      className="flex flex-col items-center text-center gap-2 sm:gap-6 bg-zinc-950 text-teal-50 rounded-2xl py-8 px-12 border border-zin-800 m-3 sm:m-7 shadow-[0_0_4px_1px_gray]"
      ref={divRef}
      tabIndex={-1}
    >
      <p className="text-2xl">You've matched all the memory cards! 🎉</p>
      <p>Built by Esrael Abebe</p>
      <div className="wrapper--score flex flex-col gap-3">
        {/** Show timer and best score after all cards are matched */}
        <div className="flex flex-col items-center sm:flex-row sm:gap-3 font-bold text-sky-300">
          <label htmlFor="time">Time:</label>
          <Timer id="time" time={time} setTime={setTime} />
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:gap-3 font-bold text-sky-300">
          <label
            id="best-score"
            htmlFor="bestScore"
          >{`Personal best (${level}):`}</label>
          {bestScore !== null && <p id="bestScore">{formatTime(bestScore)}</p>}
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
        <RegularButton handleClick={resetGame}>Play again</RegularButton>
      </div>
    </div>
  );
}
export default GameOver;
