import "./GameOver.css";
import RegularButton from "./RegularButton";

function GameOver({handleClick}) {
  return (
    <div className="wrapper wrapper--accent">
      <p className="p--large">You've matched all the memory cards!</p>
      {/**
       *Render an instance of the "RegularButton" component
       *This button should reset the game and return the user to the initial form displayed at the start.
       */}
      <RegularButton handleClick={handleClick}>Play Again </RegularButton>
    </div>
  );
}
export default GameOver;
