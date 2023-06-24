import { render } from "@testing-library/react";
import { SecondDisplacementThumb } from ".";

jest.mock("@hooks/useStateContext", () => ({
  __esModule: true,
  default: jest.fn(),
  useStateContext: jest.fn().mockReturnValue({
    state: "deslocamento",
    value: {
      motivo: "viagem",
      observação: "sem observações",
      controle: "sem lista de controle",
    }
  })
}))

describe("<SecondDisplacementThumb />", () => {
  afterAll(() => jest.clearAllMocks());

  it("should render without errors", () => {
    const { container } = render(<SecondDisplacementThumb />);

    expect(container).toBeInTheDocument();
  });

  it("should display the correct 'controle' and 'motivo'", () => {
    const { getByTestId } = render(<SecondDisplacementThumb />);
    const userReason = getByTestId("userReason");
    const displacementCheckList = getByTestId("displacementCheckList");

    expect(userReason.textContent).toBe("viagem");
    expect(displacementCheckList.textContent).toBe("sem lista de controle");
  });

  it("should display the correct category 'observação'", () => {
    const { getByTestId } = render(<SecondDisplacementThumb />);
    const displacementObservation = getByTestId("userObservation");

    expect(displacementObservation.textContent).toBe("Sem Observações");
  });

});
