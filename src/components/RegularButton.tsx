import React from "react";

export type HandleSubmit = (
  e: React.MouseEvent<HTMLButtonElement>,
  newFormDataNumber?: number,
) => void;

interface RegularButtonProps {
  children: React.ReactNode;
  handleClick?: HandleSubmit;
  handleNextLevel?: any;
}

function RegularButton({ children, handleClick, handleNextLevel }: RegularButtonProps) {
  return (
    <button
      className="bg-neutral-900 p-4 border-2  border-sky-100 rounded-xl cursor-pointer text-teal-50 text-2xl w-max m-0 mx-auto py-3 px-8 hover:bg-pink-950 focus:bg-red-950"
      onClick={(e) => {
        if(handleClick) {
          handleClick(e);
        }else {
          handleNextLevel(e)
        }
      }}
    >
      {children}
    </button>
  );
}
export default RegularButton;
