import { render } from "@testing-library/react";
import { RegisterClientCard } from ".";



describe("<RegisterClientCard />", () => {
  beforeEach(() => {
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
  })

  it("should render without errors", () => {
    const { container } = render(<RegisterClientCard />);

    expect(container).toBeInTheDocument();
  });

  it("should apply 'undefined' to empty value slot", async () => {
    jest.clearAllMocks();
    jest.mock("@hooks/useStateContext", () => ({
      __esModule: true,
      default: jest.fn(),
      useStateContext: jest.fn().mockReturnValue({
        state: "cliente",
        value: {
          nome: "",
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
    const { findByText } = render(<RegisterClientCard />);

    const title = await findByText("Cliente: undefined");

    expect(title).toBeInTheDocument();
  });
});
