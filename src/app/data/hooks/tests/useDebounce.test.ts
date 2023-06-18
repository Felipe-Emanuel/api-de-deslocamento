import { renderHook } from "@testing-library/react";
import { useDebounce } from "../useDebounce";
import { act } from "react-dom/test-utils";

jest.useFakeTimers();

describe("useDebounce", () => {
  it("should debounce the function call", () => {
    const { result } = renderHook(() => useDebounce());

    const mockFn = jest.fn();
    const delay = 1000;

    act(() => {
      result.current.debounced(mockFn, delay);
    });

    expect(mockFn).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(delay);
    });

    expect(mockFn).toHaveBeenCalled();
  });
});
