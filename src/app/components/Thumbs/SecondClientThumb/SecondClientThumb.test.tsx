import { render } from "@testing-library/react";
import { SecondClientThumb } from ".";

jest.mock("@hooks/useStateContext", () => ({
  __esModule: true,
  default: jest.fn(),
  useStateContext: jest.fn().mockReturnValue({
    state: "cliente",
    value: {
      nome: "John Doe",
      cidade: "Rio de Janeiro",
      uf: "RJ",
    },
  }),
}));

describe("<SecondClientThumb />", () => {
  afterAll(() => jest.clearAllMocks());

  it("should render without error", () => {
    const { container } = render(<SecondClientThumb />);
    expect(container).toBeInTheDocument();
  });

  it("should apply correctly labels", () => {
    const { container } = render(<SecondClientThumb />);

    const input = container.querySelector("input")
    expect(input?.value).toBe("John Doe");
  });

  it("should apply correctly labels", () => {
    const { findByText } = render(<SecondClientThumb />);
    const labels = ["Seu nome", "Sua cidade", "UF"]

    labels.forEach(async label => {
      const inputLabel = await findByText(label)

      expect(inputLabel).not.toBe("");
    })
  })
});
