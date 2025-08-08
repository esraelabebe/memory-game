import { useState, useEffect } from "react";

function Timer({ isGameOn, areAllCardsMatched }) {
  const [time, setTime] = useState(0);

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
  }, [isGameOn, areAllCardsMatched]);

  // Formatting for display (e.g., hours, minutes, seconds, milliseconds)
  const formatTime = (sec) => {
    const hours = Math.floor(sec / 3600);
    const minutes = Math.floor((sec % 3600) / 60);

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(sec).padStart(2, "0")}`;
  };

  return (
    <div>
      <p>{formatTime(time)}</p>
    </div>
  );
}

export default Timer;
