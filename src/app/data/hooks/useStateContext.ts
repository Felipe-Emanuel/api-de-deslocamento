import { useContext } from "react";
import { StateContext } from "../contexts/StateContext"

export const useStateContext = () => useContext(StateContext)
