import { useRef, useEffect } from "react";
import RegularButton from "./RegularButton";
import "./ErrorCard.css";

function ErrorCard({ handleClick }) {
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.focus();
  }, []);

  return (
    <div
      className="flex flex-col items-center gap-6 bg-neutral-900 text-teal-50 text-center rounded-lg wrapper--accent py-8 px-12 border border-sky-100 shadow-[0_0_3px_1px_white]"
      ref={divRef}
      tabIndex={-1}
    >
      <p className="text-2xl">Sorry, there was an error.</p>
      <p className="text-lg">
        Please come back later or click the button below to try restarting the
        game.
      </p>
      <RegularButton handleClick={handleClick}>Restart game</RegularButton>
    </div>
  );
}
export default ErrorCard;
