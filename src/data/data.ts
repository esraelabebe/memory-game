export interface DataItem {
  name?: string; // Optional because 'number' items don't have names
  value: string;
}

interface Data {
  group: DataItem[];
  number: DataItem[];
}

const data: Data  = {
  group: [
    {
      name: "Animals and nature",
      value: "animals-nature",
    },
    {
      name: "Food and drink",
      value: "food-drink",
    },
    {
      name: "Travel and places",
      value: "travel-places",
    },
    {
      name: "Objects",
      value: "objects",
    },
    {
      name: "Symbols",
      value: "symbols",
    },
  ],
  number: [
    {
      value: "10",
    },
    {
      value: "20",
    },
    {
      value: "30",
    },
    {
      value: "40",
    },
    {
      value: "50",
    },
  ],
};
export { data };
