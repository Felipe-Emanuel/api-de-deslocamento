import { useContext } from "react";
import { PageStateContext } from "../contexts/PageStateContext";

export const usePageStateContext = () => useContext(PageStateContext)
