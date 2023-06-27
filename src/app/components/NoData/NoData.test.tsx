import { fireEvent, render, waitFor } from "@testing-library/react"
import { NoData } from ".";
import { useStateContext } from "@hooks/useStateContext";

jest.mock("@hooks/useStateContext", () => ({
  __esModule: true,
  useStateContext: jest.fn().mockReturnValue({
    setState: jest.fn()
  })
}))

describe("<NoData />", () => {
  const { setState } = useStateContext();

  it("should render without errors", () => {
    const { container } = render(<NoData section="cliente" />);

    expect(container).toBeInTheDocument()
  })

  it("should render with default values", async () => {
    //@ts-expect-error: CHAMADA SEM PROPRIEDADE OBRIGATÓRIA
    const { findByText } = render(<NoData />);

    const buttno = await findByText("Cadastre meu primeiro cliente!")

    expect(buttno).toBeInTheDocument()
  })

  it("should apply correctly section link", async () => {


    const { findByText } = render(<NoData section="condutor" />);

    const button = await findByText("Cadastre meu primeiro condutor!");
    fireEvent.click(button)
    await waitFor(() => {
      expect(setState).toHaveBeenCalledWith("condutor");
    })
  })
})
