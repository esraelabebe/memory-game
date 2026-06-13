import RegularButton from "../../components/RegularButton";
import { useFormData, useGameStatusData } from "../../Context/AppStateContext";

interface LevelProps {
  resetGame: () => void;
}
function Level() {
  const { formData, setFormData } = useFormData();
  const { startGame, resetGame } = useGameStatusData();

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

  return <RegularButton onClick={handleNextLevel}>Next level</RegularButton>;
}
export default Level;
