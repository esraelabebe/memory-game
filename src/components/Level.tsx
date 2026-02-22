import { FormData } from "./Form";
import RegularButton, { HandleSubmit } from "./RegularButton";

interface LevelProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  startGame: HandleSubmit;
  resetGame: () => void;
}
function Level({ formData, setFormData, startGame, resetGame }: LevelProps) {
  // When next level is selected add 10 and set formData state.
  const handleNextLevel = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newFormDataNumber = formData.number + 10 as 10| 20 | 30 | 40 | 50;
    setFormData({
      group: formData.group,
      number: newFormDataNumber,
    });
    resetGame();
    startGame(e, newFormDataNumber);
  };

  return (
    <RegularButton handleNextLevel={handleNextLevel}>Next level</RegularButton>
  );
}
export default Level;
