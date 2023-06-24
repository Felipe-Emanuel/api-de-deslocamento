import { render } from "@testing-library/react";
import { getData } from "@services/client";
import { FormControlComp } from ".";
import { usePageStateContext } from "@hooks/usePageStateContext";

jest.mock("@hooks/useStateContext", () => ({
  __esModule: true,
  useStateContext: jest.fn().mockReturnValue({
    state: "deslocamento",
  }),
}));

jest.mock("@hooks/usePageStateContext", () => ({
  __esModule: true,
  usePageStateContext: jest.fn().mockReturnValue({
    options: {},
    ids: {},
    handleIdChange: jest.fn(),
    setClients: jest.fn(),
    setConductors: jest.fn(),
    setVehicles: jest.fn(),
    filtaredData: jest.fn(),
  }),
}));

jest.mock("@services/client", () => ({
  __esModule: true,
  getData: jest.fn().mockResolvedValueOnce("dataClient")
    .mockResolvedValueOnce("dataConductor")
    .mockResolvedValueOnce("dataVehicle"),
}));

describe("<FormControl/>", () => {
  it("should render without errors", () => {
    const { container } = render(<FormControlComp objectKey="idCliente" />);

    expect(container).toBeInTheDocument();

    const label = container.querySelector("label");
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent("idCliente");
  });

  it("should update states correctly when state is 'deslocamento'", async () => {
    const mockSetClients = jest.fn();
    const mockSetConductors = jest.fn();
    const mockSetVehicles = jest.fn();

    const usePageStateContextMock = usePageStateContext as jest.MockedFunction<typeof usePageStateContext>;
    //@ts-expect-error: FUNÇÕES MOCKADAS NÃO BATEM COM TIPAGEM DE PAGESTATECONTEXT
    usePageStateContextMock.mockReturnValue({
      options: {
        idCondutor: [],
        idVeiculo: [],
        idCliente: []
      },
      ids: {
        idCondutor: "",
        idVeiculo: "",
        idCliente: ""
      },
      handleIdChange: jest.fn(),
      setClients: mockSetClients,
      setConductors: mockSetConductors,
      setVehicles: mockSetVehicles,
      filtaredData: jest.fn(),
    });

    render(<FormControlComp objectKey="idCliente" />);

    await Promise.resolve();

    expect(getData).toHaveBeenCalledTimes(6);
    expect(getData).toHaveBeenCalledWith("cliente");
    expect(getData).toHaveBeenCalledWith("condutor");
    expect(getData).toHaveBeenCalledWith("veiculo");
  });
});
