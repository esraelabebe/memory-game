import "./RegularButton.css";

function RegularButton({ children, handleClick }) {
  return (
    <button className="regular-btn btn--text" onClick={handleClick}>
      {children}
    </button>
  );
}

export default RegularButton;
