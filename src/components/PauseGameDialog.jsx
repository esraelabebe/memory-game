import { AlertDialog } from "@base-ui/react/alert-dialog";

function PauseGameDialog({ isPlay, setIsPlay, handlePlayPause, isGameOn }) {
  return (
    <AlertDialog.Root
      open={isPlay}
      onOpenChange={(open) => {
        setIsPlay(open);
      }}
    >
      {isGameOn && (
        <AlertDialog.Trigger
          onClick={handlePlayPause}
          className="bg-white/10 p-2 rounded-full shrink-0 size-10 curser-pointer hover:opacity-80 text-[1.2rem]"
        >
          {isPlay ? "▶" : "⏸"}
        </AlertDialog.Trigger>
      )}
      <AlertDialog.Portal>
        <AlertDialog.Backdrop className="fixed inset-0 min-h-dvh bg-black opacity-20 transition-all duration-150 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 dark:opacity-70 supports-[-webkit-touch-callout:none]:absolute" />
        <AlertDialog.Popup className="fixed top-1/2 left-1/2 -mt-8 w-96 max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-sky-900/50 backdrop-blur-sm border border-white/20 p-6 text-gray-900 outline outline-1 transition-all duration-150 data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0">
          <AlertDialog.Title className="-mt-1.5 mb-1 text-lg font-bold text-teal-50">
             Press Play to continue.
          </AlertDialog.Title>
          <AlertDialog.Description className="mb-6 text-base font-bold text-teal-50">
          </AlertDialog.Description>
          <div className="flex justify-end gap-4">
            <AlertDialog.Close
              className="flex h-10 items-center justify-center rounded-md border bg-gray-100 border border-sky-950 px-3.5 text-base font-bold text-pink-600 select-none hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100"
            >
              Play
            </AlertDialog.Close>
          </div>
        </AlertDialog.Popup>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
export default PauseGameDialog;
