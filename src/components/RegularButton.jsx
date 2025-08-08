import "./RegularButton.css";

function RegularButton({ children, handleClick, handleNextLevel }) {
  return (
    <button className="regular-btn btn--text" onClick={handleClick ?? handleNextLevel}>
      {children}
    </button>
  );
}
export default RegularButton;
