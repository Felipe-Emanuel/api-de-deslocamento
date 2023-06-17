export const mockSetState = jest.fn();
export const mockSetPageState = jest.fn();

export const mockUseStateContext = jest.fn().mockReturnValue({
  outHome: false,
  state: "",
  setState: mockSetState,
});

export const mockUsePageStateContext = jest.fn().mockReturnValue({
  pageState: "",
  setPageState: mockSetPageState,
});


