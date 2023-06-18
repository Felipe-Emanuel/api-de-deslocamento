import { useRef } from "react";
import { toast } from "react-toastify";

export const useDebounce = () => {
  const timeOutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const debounced = (fn: () => void, delay: number, msg: string) => {
    if (timeOutRef.current) clearTimeout(timeOutRef.current);

    timeOutRef.current = setTimeout(() => {
      fn();
      toast.success(msg)
    }, delay)
  }

  return {debounced}
}
