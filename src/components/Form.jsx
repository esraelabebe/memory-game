import RegularButton from "./RegularButton";

function Form({ handleSubmit, loading }) {
  return (
    <form>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <RegularButton handleClick={handleSubmit}>Start Game</RegularButton>
      )}
    </form>
  );
}

export default Form;