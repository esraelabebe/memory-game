import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogCancel,
} from "../alert-dialog";

interface PauseGameDialogProps {
  isPlay: boolean;
  setIsPlay: React.Dispatch<React.SetStateAction<boolean>>;
  handlePlayPause: () => void;
  isGameOn?: boolean;
}
function PauseGameDialog({
  isPlay,
  setIsPlay,
  handlePlayPause,
  isGameOn,
}: PauseGameDialogProps) {
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
      <AlertDialogTrigger onClick={handlePlayPause}>
        {isPlay ? "▶" : "⏸"}
      </AlertDialogTrigger>
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
