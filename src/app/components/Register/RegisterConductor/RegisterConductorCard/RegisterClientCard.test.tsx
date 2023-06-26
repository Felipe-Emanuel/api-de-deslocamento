import { render } from "@testing-library/react";
import { RegisterConductorCard } from ".";

jest.mock("@hooks/useStateContext", () => ({
  useStateContext: jest.fn().mockReturnValue({
    state: "condutor",
    value: {
      condutor: "Sullivan",
      habilitação: "",
      categoria: "A",
      vencimento: "2023-06-18T02:37:28.815Z",
    },
  }),
}));

describe("<RegisterConductorCard />", () => {
  it("should render without errors", () => {
    const { container } = render(<RegisterConductorCard />);

    expect(container).toBeInTheDocument();
  });

  it("should apply correctly 'condutor' name", async () => {
    const { findByText } = render(<RegisterConductorCard />);

    const title = await findByText("Sullivan");

    expect(title).toBeInTheDocument();
  });

  it("should apply a question when any value slot is empty/undefined", async () => {
    const { findByText } = render(<RegisterConductorCard />);

    const title = await findByText("Qual o número de sua habilitação? - Categora: A");

    expect(title).toBeInTheDocument();
  });
});
