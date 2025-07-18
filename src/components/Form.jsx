import { useRef, useEffect } from "react";
import RegularButton from "./RegularButton";
import Select from "./Select";
import "./Form.css";

function Form({ handleSubmit, handleChange, isFirstRender, loading }) {
  const divRef = useRef(null);

  useEffect(() => {
    !isFirstRender && divRef.current.focus();
  }, [isFirstRender]);

  return (
    <div className="form-container" ref={divRef} tabIndex={-1}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p className="p--regular">
            Customize the game by selecting an emoji group and a number of
            memory cards.
          </p>
          <form className="form-wrapper">
            <Select handleChange={handleChange} />
            <RegularButton handleClick={handleSubmit}>Start Game</RegularButton>
          </form>
        </>
      )}
    </div>
  );
}

export default Form;
