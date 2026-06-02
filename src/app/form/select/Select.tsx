import { data } from "./data/data";
import Option from "./Option";
import { HandleChange } from "../../../App";
import { useFormData } from "../../../Context/AppStateContext";

export interface FormData {
  group: string;
  number: 10 | 20 | 30 | 40 | 50;
}

interface SelectProps{
  handleGroupChange: HandleChange;
  handleNumberChange: HandleChange;
}

function Select({ handleGroupChange, handleNumberChange,}: SelectProps) {
  const {formData} = useFormData();

  const selectEl = Object.entries(data).map(([key, value]) => (
    <div key={key} className="flex flex-col gap-2">
      <label htmlFor={key}>Select an emoji {key}</label>
      <select
        className="bg-slate-950 text-teal-50 text-base font-black p-4 border-1  border-sky-100 rounded-xl cursor-pointer  hover:bg-pink-950 focus:bg-pink-950"
        name={key}
        value={key === "group" ? formData.group : formData.number}
        id={key}
        onChange={key === "group" ? handleGroupChange : handleNumberChange}
      >
        <Option valueArray={value} />
      </select>
    </div>
  ));
  return selectEl;
}
export default Select;
