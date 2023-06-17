'use client';

import { useStateContext } from "@/src/data/hooks/useStateContext";

export default function statePage () {
  const { state } = useStateContext()

  return (
    <h1>página de {state}</h1>
  )
}
