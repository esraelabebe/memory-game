import { useRef, useEffect } from "react";
import RegularButton from "./RegularButton";
import Select from "./Select";

function Form({ handleSubmit, handleChange, isFirstRender, loading }) {
  const divRef = useRef(null);

  useEffect(() => {
    !isFirstRender && divRef.current.focus();
  }, [isFirstRender]);

  return (
    <div className="flex flex-col gap-4 text-start m-4" ref={divRef} tabIndex={-1}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p className="p--regular">
            Customize the game by selecting an emoji group and a number of
            memory cards.
          </p>
          <form className="flex flex-col bg-neutral-900 text-teal-50 rounded-lg gap-8 text-xl p-4">
            <Select handleChange={handleChange} />
            <RegularButton handleClick={handleSubmit}>Start Game</RegularButton>
          </form>
        </>
      )}
    </div>
  );
}

export default Form;
