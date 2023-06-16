"use client";
import { ReactNode, createContext, useState } from "react";

export type StateType = "cliente" | "deslocamento" | "condutor" | "veículo";

interface StateContextProvider {
  children: ReactNode;
}

type StateContextType = {
  state: StateType,
  setState: (state: StateType) => void
};

export const StateContext = createContext<StateContextType>({
  setState: () => {},
  state: "cliente"
});


export const StateContextProvider = ({ children }: StateContextProvider) => {
  const [state, setState] = useState<StateType>("cliente");

  return (
    <StateContext.Provider
    value={{
      state,
      setState,
    }}
  >
    {children}
  </StateContext.Provider>
  );
};
