import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogCancel,
} from "../components/alert-dialog";

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
  if (!isGameOn || areAllCardsMatched) {
    return null;
  }
  return (
    <AlertDialog
      open={showResetConfirm}
      onOpenChange={(open) => {
        setShowResetConfirm(open);
      }}
    >
      <AlertDialogTrigger onClick={handleLogoClick}>⬅</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Restart Game?</AlertDialogTitle>
        <AlertDialogDescription>
          Are you sure you want to restart? Your current progress will be lost.
        </AlertDialogDescription>
        <div className="flex justify-end gap-4">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogCancel className="text-pink-600" onClick={resetGame}>
            Restart
          </AlertDialogCancel>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
export default ExitGameConfirmationDialog;
