import { useRef, useEffect } from "react";
import "./GameOverErrorCard.css";
import RegularButton from "./RegularButton";
import Level from "./Level";
import Timer from "./Timer";

function GameOver({
  handleClick,
  formData,
  setFormData,
  startGame,
  resetGame,
  time,
  setTime
}) {
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
      <p>Built by Esrael Abebe.</p>
      <div className="wrapper--score">
        {/** Show timer and best score after all cards are matched */}
        <div className="score">
          <p>Time:</p>
          <Timer time={time} setTime={setTime} />
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
