import RegularButton, { HandleSubmit } from "../../components/RegularButton";
import { useFormData } from "../../Context/AppStateContext";

interface LevelProps {
  startGame: HandleSubmit;
  resetGame: () => void;
}
function Level({ startGame, resetGame }: LevelProps) {
  const { formData, setFormData } = useFormData();

  const handleNextLevel = (e: React.MouseEvent<HTMLButtonElement>) => {
    // When next level is selected add 10 and set formData state.
    const newFormDataNumber = (formData.number + 10) as 10 | 20 | 30 | 40 | 50;
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
