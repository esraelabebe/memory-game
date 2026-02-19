import RegularButton from "./RegularButton";

function Level({ formData, setFormData, startGame, resetGame }) {
  // When next level is selected add 10 and set formData state.
  const handleNextLevel = (e) => {
    const newFormDataNumber = formData.number + 10;
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
