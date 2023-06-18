"use client";
import { ReactNode, createContext, useState } from "react";

export type StatePageType =
  | "início"
  | "explorar"
  | "cadastrar"
  | "meus registros"
  | undefined;

interface PageStateContextProviderProps {
  children: ReactNode;
}

type PageStateContextType = {
  setPageState: (state: StatePageType) => void;
  pageState: StatePageType;
};

export const PageStateContext = createContext<PageStateContextType>({
  setPageState: () => {},
  pageState: "explorar",
});

export const PageStateContextProvider = ({
  children,
}: PageStateContextProviderProps) => {
  const [pageState, setPageState] = useState<StatePageType>();

  return (
    <PageStateContext.Provider
      value={{
        setPageState,
        pageState,
      }}
    >
      {children}
    </PageStateContext.Provider>
  );
};
