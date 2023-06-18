import { fireEvent, render } from "@testing-library/react";
import { mockedCard } from "../Thumbs/FirstThumb/FloatCard/mockedCard";
import { SectionCard } from ".";
import { useStateContext } from "@hooks/useStateContext";

jest.mock("@hooks/useStateContext");
jest.mock("@services/client");

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

  it("should change idActive when card is clicked", async () => {

    const { findByTestId } = render(
      <SectionCard title="Test Title" isLastObject />
    );

    const card = await findByTestId("card");
    fireEvent.click(card);

    expect(card).toHaveClass("isActive");
  });

  it("should change idActive when card on blur", async () => {

    const { findByTestId } = render(
      <SectionCard title="Test Title" isLastObject />
    );

    const card = await findByTestId("card");
    fireEvent.blur(card);

    expect(card).not.toHaveClass("isActive");
  });
});
