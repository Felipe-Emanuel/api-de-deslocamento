import { fireEvent, render, waitFor } from "@testing-library/react"
import { FirstThumb } from "."
import { mockedCard } from "./FloatCard/mockedCard";
import { useStateContext } from "@hooks/useStateContext";

jest.mock("@services/client/index", () => ({
  getDataById: jest.fn(),
}));

jest.mock("@hooks/useStateContext", () => ({
  useStateContext: jest.fn(() => ({
    state: "Cliente",
    filteredData: [],
    data: [],
    setData: jest.fn()
  })),
}));

describe("<FirstThumb/>", () => {
  const { setData } = useStateContext();

  beforeEach(() => {
    setData(mockedCard)
  })

  it("should render without errors", () => {
    const { container } = render(<FirstThumb />
    );
    expect(container).toBeInTheDocument();
  });

  it("renders default state field", () => {
    const {getByText} = render(<FirstThumb />);

    const autocomplete = getByText("Cliente");
    expect(autocomplete).toBeInTheDocument();
  });

  it("should apply correctly option values", async () => {
    const { getByRole } = render(<FirstThumb />);

    const input = getByRole("combobox") as HTMLInputElement
    fireEvent.change(input, { target: { value: "John Doe"}})
    waitFor(() => {
      expect(input.value).toBe("John Doe");
    })
  })

  it("should handle form submit", async () => {
    const { findByLabelText, findByText } = render(<FirstThumb />);

    const input = await findByLabelText("Cliente");

    fireEvent.change(input, { target: { value: "Option 1" } });

    const submitButton = await findByText("Buscar Cliente");

    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(setData).toHaveBeenCalledWith(mockedCard);
    });
  });

})
