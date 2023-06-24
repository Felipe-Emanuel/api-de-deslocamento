import { fireEvent, render } from "@testing-library/react";
import { mockedCard } from "../Thumbs/FirstThumb/FloatCard/mockedCard";
import { SectionCard } from ".";
import { useStateContext } from "@hooks/useStateContext";

jest.mock("@hooks/useStateContext");
jest.mock("@services/client");

jest.mock("@hooks/useInput", () => ({
  __esModule: true,
  useInput: jest.fn().mockReturnValue({
    vehicle: {},
    value: {},
    client: {},
    conductor: {},
    displacement: {},
    clientForm: {},
    conductorForm: {},
    displacementForm: {},
    vehicleForm: {},
    updatedConductor: jest.fn(),
    updateClient: jest.fn(),
    updatedDisplacement: jest.fn(),
    updatedVehicle: jest.fn(),
  }),
}));

describe("<SectionCard />", () => {
  const mockedState = "cliente";

  beforeEach(() => {
    //@ts-expect-error: SEM TEMPO PARA CRIAÇÃO DE MOCKS DEVIDO À DATA DE ENTREGA DO TESTE
    useStateContext.mockReturnValue({ state: mockedState, data: mockedCard });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render without errors", () => {
    const { container } = render(<SectionCard title="title" isLastObject />);

    expect(container).toBeInTheDocument();
  });

  it("should render with default values", () => {
    // @ts-expect-error: CHAMADA SEM PROPRIEDADES OBRIGATÓRIAS
    const { container } = render(<SectionCard />);

    expect(container).toBeInTheDocument();
  });

  it("should render correctly title", async () => {
      const { findByText } = render(<SectionCard title="Title" isLastObject={true} />);
      const title = await findByText("Title");
      expect(title).toBeInTheDocument();
  });
});
