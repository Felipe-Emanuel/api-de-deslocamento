import { SetStateAction, SyntheticEvent, useState } from "react";
import { StateType } from "../contexts/StateContext";
import { StatePageType } from "../contexts/PageStateContext";
import { useStateContext } from "./useStateContext";
import { usePageStateContext } from "./usePageStateContext";

export const useMenuItem = () => {
  const { outHome, setState } = useStateContext();
  const { setPageState } = usePageStateContext();

  const [value, setValue] = useState<SetStateAction<string>>();
  const handleChange = (
    e: SyntheticEvent,
    newValue: (StateType & StatePageType)
  ) => {
    e.preventDefault();
    setValue(newValue);

    if (outHome) {
      return setPageState(newValue);
    }

    setState(newValue);
  };

  return {
    handleChange,
    setValue,
    value
  }
}
