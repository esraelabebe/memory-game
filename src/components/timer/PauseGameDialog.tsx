import { useGameStatusData } from "../../Context/AppStateContext";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogCancel,
} from "../alert-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../Tooltip";
interface PauseGameDialogProps {
  isPlay: boolean;
  setIsPlay: React.Dispatch<React.SetStateAction<boolean>>;
  handlePlayPause: () => void;
}
function PauseGameDialog({
  isPlay,
  setIsPlay,
  handlePlayPause,
}: PauseGameDialogProps) {
  const { isGameOn } = useGameStatusData();

  if (!isGameOn) {
    return null;
  }

  return (
    <AlertDialog
      open={isPlay}
      onOpenChange={(open) => {
        setIsPlay(open);
      }}
    >
      <Tooltip>
        <TooltipTrigger
          render={<AlertDialogTrigger onClick={handlePlayPause} />}
        >
          {isPlay ? "▶" : "⏸"}
        </TooltipTrigger>
        <TooltipContent>{isPlay ? "Play" : "Pause"}</TooltipContent>
      </Tooltip>
      <AlertDialogContent>
        <AlertDialogTitle>Press Play to continue.</AlertDialogTitle>
        <AlertDialogDescription></AlertDialogDescription>
        <div className="flex justify-end gap-4">
          <AlertDialogCancel className="text-pink-600">Play</AlertDialogCancel>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
export default PauseGameDialog;
