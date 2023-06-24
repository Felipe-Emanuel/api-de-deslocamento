import { render } from "@testing-library/react";
import { Register } from ".";

jest.mock("@hooks/useStateContext", () => ({
  __esModule: true,
  default: jest.fn(),
  useStateContext: jest.fn().mockReturnValue({
    state: "cliente",
    value: {
      nome: "John Doe",
      documento: 123,
      tipo: "CPF",
      logradouro: "Final da rua",
      número: "123",
      cidade: "São Paulo",
      uf: "SP",
      bairro: "Bairro",
    },
  }),
}));

describe("<Register />", () => {
  it("should render without errors", () => {
    const { container } = render(<Register />);

    expect(container).toBeInTheDocument();
  });

  it("should render apply correctly state title", async () => {
    const { findByText } = render(<Register />);

    const title = await findByText("Registre um cliente com poucos clicks!");

    expect(title).toBeInTheDocument();
  });
});
