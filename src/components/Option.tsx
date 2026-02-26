import { DataItem } from "../data/data";

interface ValueArray {
  valueArray: DataItem[];
}

function Option({ valueArray }: ValueArray) {
  const optionEl = valueArray.map(({ name, value }) => (
    <option key={value} value={value}>
      {name ? name : value}
    </option>
  ));

  return optionEl;
}
export default Option;
