import { useRef, useEffect } from "react";
import RegularButton from "../../components/RegularButton";
import Select from "./select/Select";
import { useGameStatusData } from "../../Context/AppStateContext";

interface FormProps {
  isFirstRender: boolean;
  loading: boolean;
}

function Form({ isFirstRender, loading }: FormProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const { startGame } = useGameStatusData();

  useEffect(() => {
    if (!isFirstRender) {
      divRef.current?.focus();
    }
  }, [isFirstRender]);

  return (
    <div className="flex flex-col gap-4 text-start" ref={divRef} tabIndex={-1}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p className="text-teal-50">
            Customize the game by selecting an emoji group and a number of
            memory cards.
          </p>
          <form className="flex flex-col bg-zinc-950 text-teal-50 rounded-xl gap-8 text-xl p-10 border border-zin-950">
            <Select />
            <RegularButton onClick={startGame}>Start Game</RegularButton>
          </form>
        </>
      )}
    </div>
  );
}

export default Form;
