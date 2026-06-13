import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { FormData } from "../app/form/select/Select";
import { HandleSubmit } from "../components/RegularButton";
import { HandleChange } from "../App";

interface FormDataContextType {
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
  handleGroupFormChange: HandleChange;
  handleNumberFormChange: HandleChange;
}

const FormDataContext = createContext<FormDataContextType | null>(null);

const useFormData = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error("useFormData must be used within a FormDataContext");
  }
  return context;
};

interface GameStatusContextType {
  isGameOn: boolean;
  setIsGameOn: React.Dispatch<React.SetStateAction<boolean>>;
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  resetGame: () => void;
  startGame: HandleSubmit;
  turnCard: (emojiElement: string, index: number) => void;
}

const GameStatusContext = createContext<GameStatusContextType | null>(null);

const useGameStatusData = () => {
  const context = useContext(GameStatusContext);
  if (!context) {
    throw new Error(
      "useGameStatusData must be used within a GameStatusContext",
    );
  }
  return context;
};

export {
  FormDataContext,
  useFormData,
  GameStatusContext,
  useGameStatusData
};
