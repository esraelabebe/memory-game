import RegularButton from "./RegularButton";

function Form({ handleSubmit }) {
  return (
    <>
      <RegularButton />
      <button onClick={handleSubmit}>Start Game</button>
    </>
  );
}

export default Form;
