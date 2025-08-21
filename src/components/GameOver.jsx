import { useRef, useEffect, useState } from "react";
import "./GameOverErrorCard.css";
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
   *Add focus to this new DOM node and prompt screen readers to read its content
   *aloud as soon as it renders.
   */
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.focus();
  }, []);

  return (
    <div className="wrapper wrapper--accent" ref={divRef} tabIndex={-1}>
      <p className="p--large">You've matched all the memory cards! 🎉</p>
      <p>Built by Esrael Abebe</p>
      <div className="wrapper--score">
        {/** Show timer and best score after all cards are matched */}
        <div className="score">
          <label id="time">Time:</label>
          <Timer
            id="time"
            time={time}
            setTime={setTime}
            bestScore={bestScore}
          />
        </div>
        <div className="score">
          <label id="best-score">Personal best:</label>
          <p>{formatTime(bestScore)}</p>
        </div>
      </div>
      <div className="play--button">
        <Level
          formData={formData}
          setFormData={setFormData}
          startGame={startGame}
          resetGame={resetGame}
        />
        {/**
         *Render an instance of the "RegularButton" component
         *This button should reset the game and return the user to the initial form displayed at the start.
         */}
        <RegularButton handleClick={handleClick}>Play again</RegularButton>
      </div>
    </div>
  );
}
export default GameOver;
