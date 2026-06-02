import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { FormData } from "../app/form/select/Select";

interface FormDataContextType {
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
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
