import { AlertDialog } from "@base-ui/react/alert-dialog";

interface ExitGameConfirmationDialogProps {
  showResetConfirm: boolean;
  setShowResetConfirm: React.Dispatch<React.SetStateAction<boolean>>;
  resetGame: () => void;
  handleLogoClick: () => void;
  isGameOn: boolean;
  areAllCardsMatched: boolean;
}

function ExitGameConfirmationDialog({
  showResetConfirm,
  setShowResetConfirm,
  resetGame,
  handleLogoClick,
  isGameOn,
  areAllCardsMatched,
}: ExitGameConfirmationDialogProps) {
  return (
    <AlertDialog.Root
      open={showResetConfirm}
      onOpenChange={(open) => {
        setShowResetConfirm(open);
      }}
    >
      {isGameOn && !areAllCardsMatched && (
        <AlertDialog.Trigger
          onClick={handleLogoClick}
          className="curser-pointer hover:opacity-80 transition-opacity justify-start text-[1.2rem] bg-white/10 p-2 rounded-full shrink-0 size-10 font-bold"
        >
          ⬅
        </AlertDialog.Trigger>
      )}
      <AlertDialog.Portal>
        <AlertDialog.Backdrop className="fixed inset-0 min-h-dvh bg-black opacity-20 transition-all duration-150 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 dark:opacity-70 supports-[-webkit-touch-callout:none]:absolute" />
        <AlertDialog.Popup className="fixed top-1/2 left-1/2 -mt-8 w-96 max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-sky-700/70 border border-sky-400 p-6 text-gray-900 outline outline-1 transition-all duration-150 data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0">
          <AlertDialog.Title className="-mt-1.5 mb-1 text-lg font-bold text-teal-50">
            Restart Game?
          </AlertDialog.Title>
          <AlertDialog.Description className="mb-6 text-base font-bold text-teal-50">
            Are you sure you want to restart? Your current progress will be
            lost.
          </AlertDialog.Description>
          <div className="flex justify-end gap-4">
            <AlertDialog.Close className="flex h-10 items-center justify-center rounded-md  bg-gray-100 border  border border-sky-800 px-3.5 font-bold text-gray-950 select-none hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100">
              Cancel
            </AlertDialog.Close>
            <AlertDialog.Close
              onClick={resetGame}
              className="flex h-10 items-center justify-center rounded-md border bg-gray-100 border border-sky-500 px-3.5 text-base font-bold text-pink-600 select-none hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100"
            >
              Restart
            </AlertDialog.Close>
          </div>
        </AlertDialog.Popup>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
export default ExitGameConfirmationDialog;
