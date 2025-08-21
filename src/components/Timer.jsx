import { useState, useEffect } from "react";
import { formatTime } from './format-time';

function Timer({ isGameOn, areAllCardsMatched, time, setTime }) {

  useEffect(() => {
    let interval;
    if (isGameOn && !areAllCardsMatched) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1); // Update every 1sec
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval); // Cleanup on unmount
  }, [isGameOn, areAllCardsMatched, setTime] );

  return (
    <div>
      <p>{formatTime(time)}</p>
    </div>
  );
}

export default Timer;
