function Level({ formData, setFormData, startGame, resetGame }) {
  const handleNextLevel = (e) => {
    const newFormDataNumber = formData.number + 10;
    setFormData({
      group: formData.group,
      number: newFormDataNumber,
    });
    resetGame();
    startGame(e, newFormDataNumber);
  };

  return <button onClick={handleNextLevel}> Next Level → </button>;
}
export default Level;
