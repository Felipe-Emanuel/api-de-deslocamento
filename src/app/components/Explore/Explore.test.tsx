import { render } from "@testing-library/react";
import { Explore } from ".";

jest.mock("@hooks/useStateContext", () => ({
  useStateContext: jest.fn().mockReturnValue({
    hasSearched: true,
    setData: jest.fn(),
    setHasSearched: jest.fn().mockReturnValue(false),
    data: [
      {
        id: undefined,
        numeroDocumento: "12",
        tipoDocumento: "a",
        nome: "John Doe",
        logradouro: "final da rua",
        numero: "12",
        bairro: "bairro",
        cidade: "cidade",
        uf: "uf",
        numeroHabilitacao: "123",
        catergoriaHabilitacao: "a",
        vencimentoHabilitacao: "2023-06-18T02:37:28.815Z",
        placa: "abc-123",
        marcaModelo: "tesla",
        anoFabricacao: 2020,
        kmAtual: 0,
        quilometro_final: 10,
        deslocamento_final: "100",
        observação: "nenhuma",
        kmInicial: 10,
        kmFinal: 100,
        inicioDeslocamento: "10",
        fimDeslocamento: "20",
        checkList: "nenhuma",
        motivo: "sem motivo",
        observacao: "sem observação",
        idCondutor: 1,
        idVeiculo: 2,
        idCliente: 3,
        type: "idCliente"
      },
    ],
    state: "cliente",
    paths: {
      cliente: "cliente",
      deslocamento: "deslocamento",
      condutor: "condutor",
      veículo: "veículo",
    },
  })
}));

describe("<DisplacementCard />", () => {
  afterEach(() => {
    jest.clearAllMocks
  })

  it("should render without errors", () => {
    const { container } = render(<Explore />);

    expect(container).toBeInTheDocument();
  });
});
