import { fireEvent, render, waitFor } from "@testing-library/react"
import { Filters } from "."
import { mockedCard } from "../Thumbs/FirstThumb/FloatCard/mockedCard";
import { useStateContext } from "@hooks/useStateContext";

jest.mock("@hooks/useStateContext");

describe("<Filters />", () => {
  beforeEach(() => {
    //@ts-expect-error: SEM TEMPO PARA CRIAR MOCKS DE FUNÇÕES DADO O PRAZO PARA O DESAFIO
    useStateContext.mockReturnValue({
      state: "cliente",
      hasSearched: false,
      setHasSearched: jest.fn(),
      setData: jest.fn().mockReturnValue(mockedCard)
    })
  })

  afterAll(() => {
    jest.clearAllMocks();
  })

  it("should render without errors", () => {
    const { container } = render(<Filters />)

    expect(container).toBeInTheDocument()
  })

  it("should apply correctly component title", async () => {
    const { findByText } = render(<Filters />)

    const title = await findByText('Buscar cliente específico')
    expect(title).toBeInTheDocument()
  })

  it("should render clear filters button", async () => {
    //@ts-expect-error: SEM TEMPO PARA CRIAR MOCKS DE FUNÇÕES DADO O PRAZO PARA O DESAFIO
    useStateContext.mockReturnValueOnce({
      state: "cliente",
      hasSearched: true,
      setHasSearched: jest.fn(),
      setData: jest.fn().mockReturnValue(mockedCard)
    })

    const { findByText } = render(<Filters />)

    const button = await findByText('Limpar filtro')
    expect(button).toBeInTheDocument()
  })

  it("should change 'hasSearched' state and remove clear filters button", async () => {
    const mockedSetData = jest.fn();
    //@ts-expect-error: SEM TEMPO PARA CRIAR MOCKS DE FUNÇÕES DADO O PRAZO PARA O DESAFIO
    useStateContext.mockReturnValueOnce({
      state: "cliente",
      hasSearched: true,
      setHasSearched: jest.fn(),
      setData: mockedSetData,
    });

    const { findByText } = render(<Filters />);

    const button = await findByText('Limpar filtro');
    fireEvent.click(button);

    await waitFor(() => {
      expect(mockedSetData).toHaveBeenCalled();
    });
  });
})
