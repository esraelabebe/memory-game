import { cn } from "../utils/utils";

export type HandleSubmit = (
  e: React.MouseEvent<HTMLButtonElement>,
  newFormDataNumber?: number,
) => void;

interface RegularButtonProps {
  children: React.ReactNode;
  handleClick?: HandleSubmit;
  handleNextLevel?: any;
  className: string;
}

function RegularButton({
  children,
  handleClick,
  handleNextLevel,
  className,
}: RegularButtonProps) {
  return (
    <button
      className={cn(
        "bg-[rgb(207,2,104)] p-4 rounded-xl cursor-pointer text-white text-2xl w-max m-0 mx-auto py-4 px-17 sm:py-2 sm:px-8 hover:bg-pink-900 focus:bg-red-950",
        className,
      )}
      onClick={(e) => {
        if (handleClick) {
          handleClick(e);
        } else {
          handleNextLevel(e);
        }
      }}
    >
      {children}
    </button>
  );
}
export default RegularButton;
