import RegularButton from "./RegularButton";

function Form({ handleSubmit }) {
  return (
    <form>
      <RegularButton handleClick={handleSubmit}>Start Game</RegularButton>
    </form>
  );
}

export default Form;
