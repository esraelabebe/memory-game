import { useEffect, Dispatch, SetStateAction } from "react";
import { formatTime } from "./format-time";

interface TimerProps {
  isGameOn?: boolean;
  areAllCardsMatched?: boolean;
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  id?: string;
}

function Timer({ isGameOn, areAllCardsMatched, time, setTime, id }: TimerProps) {
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
    <div id={id}>
      <p>{formatTime(time)}</p>
    </div>
  );
}

export default Timer;
