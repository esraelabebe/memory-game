import { useRef, useEffect } from "react";
import RegularButton, { HandleSubmit } from "./RegularButton";
import Select from "./Select";
import { HandleChange } from "../App";

export interface FormData {
  group: string;
  number: 10 | 20 | 30 | 40 | 50;
}
interface FormProps {
  handleSubmit: HandleSubmit;
  handleChange: HandleChange;
  isFirstRender: boolean;
  loading: boolean;
  formData: FormData;
}

function Form({
  handleSubmit,
  handleChange,
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
      className="flex flex-col gap-4 text-start m-4"
      ref={divRef}
      tabIndex={-1}
    >
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p className="p--regular">
            Customize the game by selecting an emoji group and a number of
            memory cards.
          </p>
          <form className="flex flex-col bg-zinc-950 text-teal-50 rounded-lg gap-8 text-xl p-10 border border-zin-950 shadow-[0_0_4px_1px_gray]">
            <Select handleChange={handleChange} formData={formData} />
            <RegularButton handleClick={handleSubmit}>Start Game</RegularButton>
          </form>
        </>
      )}
    </div>
  );
}

export default Form;
