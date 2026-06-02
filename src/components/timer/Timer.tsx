import { useEffect, useState } from "react";
import { formatTime } from "../../utils/format-time";
import PauseGameDialog from "./PauseGameDialog";
import { useGameStatusData } from "../../Context/AppStateContext";

interface TimerProps {
  areAllCardsMatched?: boolean;
  id?: string;
  showResetConfirm?: boolean;
}

function Timer({
  areAllCardsMatched,
  id,
  showResetConfirm,
}: TimerProps) {
  const [isPlay, setIsPlay] = useState(false);
  const { time, setTime, isGameOn } = useGameStatusData();

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
      />
    </div>
  );
}
export default Timer;
