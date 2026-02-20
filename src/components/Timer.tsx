import { useEffect, Dispatch, SetStateAction } from "react";
import { formatTime } from "./format-time";

interface TimerProps {
  isGameOn: boolean;
  areAllCardsMatched: boolean;
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
}

function Timer({ isGameOn, areAllCardsMatched, time, setTime }: TimerProps) {
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isGameOn && !areAllCardsMatched) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1); // Update every 1sec
      }, 1000);
    }
    return () => clearInterval(interval); // Cleanup on unmount
  }, [isGameOn, areAllCardsMatched, setTime]);

  return (
    <div>
      <p>{formatTime(time)}</p>
    </div>
  );
}

export default Timer;
