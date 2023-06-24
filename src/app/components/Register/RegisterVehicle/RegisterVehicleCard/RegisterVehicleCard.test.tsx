import { render } from "@testing-library/react";
import { RegisterVehicleCard } from ".";

jest.mock("@hooks/useStateContext", () => ({
  useStateContext: jest.fn().mockReturnValue({
    state: "veículo",
    value: {
      placa: "abc-123", fabricado: 0, modelo: "tesla", rodagem: 350
    },
  }),
}));

describe("<RegisterVehicleCard />", () => {
  it("should render without errors", () => {
    const { container } = render(<RegisterVehicleCard />);

    expect(container).toBeInTheDocument();
  });

  it("should apply correctly 'placa' name", async () => {
    const { findByText } = render(<RegisterVehicleCard />);

    const title = await findByText("Placa: ABC-123");

    expect(title).toBeInTheDocument();
  });

  it("should apply a question when any value slot is empty/undefined", async () => {
    const { findByText } = render(<RegisterVehicleCard />);

    const title = await findByText("Modelo do veículo: Tesla - Qual o ano de fabricação?");

    expect(title).toBeInTheDocument();
  });
});
