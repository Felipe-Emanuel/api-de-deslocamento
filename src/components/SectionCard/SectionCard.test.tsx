import { render } from "@testing-library/react";
import { SectionCard } from ".";
import { mockedCard } from "../Thumbs/FirstThumb/FloatCard/mockedCard";
import { useStateContext } from "@/src/data/hooks/useStateContext";
import { getData } from "@/src/data/services/client";
import { act } from "react-dom/test-utils";

jest.mock("@/src/data/hooks/useStateContext");
jest.mock("@/src/data/services/client");

describe("<SectionCard />", () => {
  const mockedState = "cliente";
  const mockedData = mockedCard;

  beforeEach(() => {
    //@ts-expect-error: SEM TEMPO PARA CRIAÇÃO DE MOCKS DEVIDO À DATA DE ENTREGA DO TESTE
    useStateContext.mockReturnValue({ state: mockedState });
    //@ts-expect-error: SEM TEMPO PARA CRIAÇÃO DE MOCKS DEVIDO À DATA DE ENTREGA DO TESTE
    getData.mockResolvedValue(mockedData);
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

  it("should render correctly title", () => {
    const { getByText } = render(<SectionCard title="Title" />);

    const title = getByText("Title");

    expect(title).toBeInTheDocument();
  });

  it("should fetch and set data correctly", async () => {
    await act(async () => {
      render(<SectionCard title="Test Title" isLastObject={true} />);
    });

    expect(getData).toHaveBeenCalledWith(mockedState);
  });
});
