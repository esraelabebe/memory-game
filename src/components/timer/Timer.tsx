import { useEffect, Dispatch, SetStateAction, useState } from "react";
import { formatTime } from "../format-time";
import PauseGameDialog from "./PauseGameDialog";

interface TimerProps {
  isGameOn?: boolean;
  areAllCardsMatched?: boolean;
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  id?: string;
  showResetConfirm?: boolean;
}

function Timer({
  isGameOn,
  areAllCardsMatched,
  time,
  setTime,
  id,
  showResetConfirm,
}: TimerProps) {
  const [isPlay, setIsPlay] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isGameOn && !areAllCardsMatched && !showResetConfirm && !isPlay) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1); // Update every 1sec
      }, 1000);
    }
    return () => clearInterval(interval); // Cleanup on unmount
  }, [isGameOn, areAllCardsMatched, setTime, showResetConfirm, isPlay]);

  const handlePlayPause = () => {
    setIsPlay(!isPlay);
  };

  return (
    <div className={"flex items-center gap-2"} id={id}>
      <p>{formatTime(time)}</p>
      <PauseGameDialog
        isPlay={isPlay}
        setIsPlay={setIsPlay}
        handlePlayPause={handlePlayPause}
        isGameOn={isGameOn}
      />
    </div>
  );
}
export default Timer;
