function Logo({
  resetGame,
  setShowResetConfirm,
}) {
  const confirmReset = () => {
    setShowResetConfirm(false);
    resetGame();
  };
  return (
    <div>
      <div className="fixed">
        <h2>Go to home page?</h2>
        <p>Your current Progress will be lost.</p>
        <div className="flex gap-4 justify-center">
          <button onClick={() => setShowResetConfirm(false)}>Cancel</button>
          <button onClick={confirmReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}
export default Logo;
