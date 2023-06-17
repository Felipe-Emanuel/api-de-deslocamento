import { fireEvent, render, waitFor } from "@testing-library/react";
import { MenuItem } from ".";
import * as mock from "./mock";

describe("<MenuItem />", () => {
  beforeEach(() => {
    mock.mockSetState.mockClear();
    mock.mockSetPageState.mockClear();
  });

  it("should call 'setPageState' function when outHome is true", async () => {
    mock.mockUseStateContext.mockReturnValueOnce({
      outHome: true,
      state: "",
      setState: mock.mockSetState,
    });

    const { getAllByRole } = render(<MenuItem />);
    const tabs = getAllByRole("tab");

    fireEvent.click(tabs[0], mock.mockSetPageState());
    await waitFor(() => {
      expect(mock.mockUsePageStateContext().setPageState).toHaveBeenCalled();
    });
  });

  it("should call 'setState' function when outHome is false", () => {
    mock.mockUseStateContext.mockReturnValueOnce({
      outHome: false,
      state: "",
      setState: mock.mockSetState,
    });

    const { getAllByRole } = render(<MenuItem />);
    const tabs = getAllByRole("tab");

    fireEvent.click(tabs[0], mock.mockSetState());

    expect(mock.mockSetState).toHaveBeenCalledWith();
  });
});
