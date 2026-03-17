import {  AlertDialog, AlertDialogContent, AlertDialogTrigger, AlertDialogDescription, AlertDialogTitle, AlertDialogRestart } from  "./alert-dialog"

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
        <AlertDialogTrigger
          onClick={handlePlayPause}
          className="bg-white/10 p-2 rounded-full shrink-0 size-10 curser-pointer hover:opacity-80 text-[1.2rem]"
        >
          {isPlay ? "▶" : "⏸"}
        </AlertDialogTrigger>
      <AlertDialogContent>
         <AlertDialogTitle className="-mt-1.5 mb-1 text-lg font-bold text-teal-50">
            Press Play to continue.
          </AlertDialogTitle>
          <AlertDialogDescription className="mb-6 text-base font-bold text-teal-50"></AlertDialogDescription>
          <div className="flex justify-end gap-4">
            <AlertDialogRestart className="flex h-10 items-center justify-center rounded-md border bg-gray-100 border border-sky-950 px-3.5 text-base font-bold text-pink-600 select-none hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100">
              Play
            </AlertDialogRestart>
          </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
export default PauseGameDialog;
