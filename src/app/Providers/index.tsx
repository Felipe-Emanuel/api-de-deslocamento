'use client'

import { ReactNode } from "react";
import { StateContextProvider } from "@contexts/StateContext";
import { PageStateContextProvider } from "../data/contexts/PageStateContext";
import { Header } from "../components/Header";

interface ProvidersProps{
  children: ReactNode
}

export function Providers({children}: ProvidersProps) {
  return (
    <StateContextProvider>
    <PageStateContextProvider>
      <Header />
      {children}
    </PageStateContextProvider>
  </StateContextProvider>
  )
}
