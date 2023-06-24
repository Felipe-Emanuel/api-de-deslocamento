import { useRef } from "react";
import { toast } from "react-toastify";

export const useDebounce = () => {
  const timeOutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const debounced = (fn: () => void, delay: number) => {
    if (timeOutRef.current) clearTimeout(timeOutRef.current);

    timeOutRef.current = setTimeout(() => {
      fn();
    }, delay)
  }

  return {debounced}
}
