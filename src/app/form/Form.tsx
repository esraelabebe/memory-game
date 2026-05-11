import { useRef, useEffect } from "react";
import RegularButton, { HandleSubmit } from "../../components/RegularButton";
import Select from "./select/Select";
import { HandleChange } from "../../App";

export interface FormData {
  group: string;
  number: 10 | 20 | 30 | 40 | 50;
}
interface FormProps {
  handleSubmit: HandleSubmit;
  handleGroupChange: HandleChange;
  handleNumberChange: HandleChange;
  isFirstRender: boolean;
  loading: boolean;
  formData: FormData;
}

function Form({
  handleSubmit,
  handleGroupChange,
  handleNumberChange,
  isFirstRender,
  loading,
  formData,
}: FormProps) {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isFirstRender) {
      divRef.current?.focus();
    }
  }, [isFirstRender]);

  return (
    <div
      className="flex flex-col gap-4 text-start"
      ref={divRef}
      tabIndex={-1}
    >
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p className="text-teal-50">
            Customize the game by selecting an emoji group and a number of
            memory cards.
          </p>
          <form className="flex flex-col bg-zinc-950 text-teal-50 rounded-xl gap-8 text-xl p-10 border border-zin-950">
            <Select handleGroupChange={handleGroupChange} handleNumberChange={handleNumberChange} formData={formData} />
            <RegularButton handleClick={handleSubmit}>Start Game</RegularButton>
          </form>
        </>
      )}
    </div>
  );
}

export default Form;
