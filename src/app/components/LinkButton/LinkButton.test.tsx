import { render } from "@testing-library/react"
import { LinkButton } from ".";
import { usePathname, useRouter } from "next/navigation";
import { useStateContext } from "@hooks/useStateContext";
import { usePageStateContext } from "@hooks/usePageStateContext";

jest.mock("next/navigation");
jest.mock("@hooks/useStateContext")
jest.mock("@hooks/usePageStateContext")

describe("<LinkButton />", () => {

  beforeEach(() => {
    //@ts-expect-error: SEM TEMPO PARA CRIAR OS MOCKS DENTRO DO PRAZO DO DESAFIO
    useRouter.mockReturnValue({
      asPath: '/'
    });
    //@ts-expect-error: SEM TEMPO PARA CRIAR OS MOCKS DENTRO DO PRAZO DO DESAFIO
    useStateContext.mockReturnValue({
      state: "cliente",
      setState: jest.fn(),
    });
    //@ts-expect-error: SEM TEMPO PARA CRIAR OS MOCKS DENTRO DO PRAZO DO DESAFIO
    usePageStateContext.mockReturnValue({
      pageState: 'explorar',
      setPageState: jest.fn(),
    })
    //@ts-expect-error: SEM TEMPO PARA CRIAR OS MOCKS DENTRO DO PRAZO DO DESAFIO
    usePathname.mockReturnValue("/")
  })

  it("should render without error", () => {
    const { container } = render(<LinkButton />);

    expect(container).toBeInTheDocument()
  })

  it("should modify active tab text", () => {
    const { container } = render(<LinkButton />)
    const buttonElement = container.querySelector("a")

    const href = buttonElement?.getAttribute("href")
    expect(href).toBe("/client")
  })

  it("should update correctly href atribute", () => {
    //@ts-expect-error: SEM TEMPO PARA CRIAR OS MOCKS DENTRO DO PRAZO DO DESAFIO
    useRouter.mockReturnValueOnce({
      asPath: "/conductor",
    });
    //@ts-expect-error: SEM TEMPO PARA CRIAR OS MOCKS DENTRO DO PRAZO DO DESAFIO
    useStateContext.mockReturnValueOnce({
      state: "condutor",
      setState: jest.fn()
    });
    //@ts-expect-error: SEM TEMPO PARA CRIAR OS MOCKS DENTRO DO PRAZO DO DESAFIO
    usePathname.mockReturnValueOnce("/conductor")

    const { container } = render(<LinkButton />)
    const buttonElement = container.querySelector("a")

    const href = buttonElement?.getAttribute("href")
    expect(href).toBe("/conductor")
  })

  it("should render the button with correct label when asPath is not '/'", () => {
    //@ts-expect-error: SEM TEMPO PARA CRIAR OS MOCKS DENTRO DO PRAZO DO DESAFIO
    useRouter.mockReturnValueOnce({
      asPath: "/conductor",
    });
    //@ts-expect-error: SEM TEMPO PARA CRIAR OS MOCKS DENTRO DO PRAZO DO DESAFIO
    usePageStateContext.mockReturnValueOnce({
      pageState: "início",
      setState: jest.fn()
    });
    //@ts-expect-error: SEM TEMPO PARA CRIAR OS MOCKS DENTRO DO PRAZO DO DESAFIO
    usePathname.mockReturnValueOnce("/conductor")

    const { getByText } = render(<LinkButton />)
    expect(getByText("Voltar")).toBeInTheDocument()
  })

})
