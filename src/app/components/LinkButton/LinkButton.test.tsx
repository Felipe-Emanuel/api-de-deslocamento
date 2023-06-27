import { render } from "@testing-library/react";
import { LinkButton } from ".";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn().mockReturnValue({
    asPath: "condutor",
  }),
}));

jest.mock("@hooks/useStateContext", () => ({
  __esModule: true,
  useStateContext: jest.fn().mockReturnValue({
    setState: jest.fn(),
    state: "condutor",
    paths: {
      cliente: "cliente",
      deslocamento: "deslocamento",
      condutor: "condutor",
      veículo: "veículo",
    },
  }),
}));

jest.mock("@hooks/usePageStateContext", () => ({
  usePageStateContext: jest.fn().mockReturnValue({
    pageState: "explorar",
  }),
}));

describe("<LinkButton />", () => {
  it("should render without error", () => {
    const { container } = render(<LinkButton />);

    expect(container).toBeInTheDocument();
  });

  it("should modify active tab text", () => {
    const { container } = render(<LinkButton />);
    const buttonElement = container.querySelector("a");

    const href = buttonElement?.getAttribute("href");
    expect(href).toBe("condutor");
  });
});
