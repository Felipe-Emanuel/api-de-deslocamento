import { render } from "@testing-library/react";
import { SecondVehicleThumb } from ".";

jest.mock("@hooks/useStateContext", () => ({
  __esModule: true,
  default: jest.fn(),
  useStateContext: jest.fn().mockReturnValue({
    state: "veículo",
    value: {
      placa: "abc-123",
      modelo: "tesla",
      fabricado: "2023",
    },
  }),
}));

describe("<SecondVehicleThumb />", () => {
  afterAll(() => jest.clearAllMocks());

  it("should render without errors", () => {
    const { container } = render(<SecondVehicleThumb />);

    expect(container).toBeInTheDocument();
  });

  it("should display the correct 'placa' and 'modelo'", () => {
    const { getByTestId } = render(<SecondVehicleThumb />);
    const carModel = getByTestId("carModel");
    const license = getByTestId("license");

    expect(carModel.textContent).toBe("Tesla");
    expect(license.textContent).toBe("Abc-123");
  });

  it("should display the correct date", () => {
    const { getByTestId } = render(<SecondVehicleThumb />);
    const carYearManufacture = getByTestId("carYearManufacture");

    expect(carYearManufacture.textContent).toBe("2023");
  });
});
