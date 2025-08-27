import { data } from "../data/data";
import Option from "./Option";

function Select({ handleChange }) {
  const selectEl = Object.entries(data).map(([key, value]) => (
    <div key={key} class="flex flex-col gap-2">
      <label htmlFor={key}>Select an emoji {key}</label>
      <select
        class="bg-neutral-900 text-teal-50 text-base font-black p-4 border-2  border-sky-100 rounded-xl cursor-pointer  hover:bg-pink-950 focus:bg-red-950"
        name={key}
        id={key}
        onChange={handleChange}
      >
        <Option valueArray={value} />
      </select>
    </div>
  ));
  return selectEl;
}
export default Select;
