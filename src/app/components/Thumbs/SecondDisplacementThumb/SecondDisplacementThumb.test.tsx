import { fireEvent, render, waitFor } from "@testing-library/react";
import { SecondDisplacementThumb } from ".";

describe("<SecondDisplacementThumb />", () => {
  it("should render without errors", () => {
    const { container } = render(<SecondDisplacementThumb />);

    expect(container).toBeInTheDocument();
  });

  it("should apply correctly 'date' type", async () => {
    const { getByTestId } = render(<SecondDisplacementThumb />);

    const divInput = getByTestId(/Início/i) as HTMLInputElement;
    const input = divInput.querySelector("input")
    expect(input?.getAttribute("type")).toBe("date")
  });

  it("should apply correctly 'reason' value", async () => {
    const { getByLabelText } = render(<SecondDisplacementThumb />);

    const input = getByLabelText(/Motivo/i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Trabalho" } });

    await waitFor(() => {
      expect(input.value).toBe("Trabalho");
    });
  });

  it("should apply correctly 'observation' value", async () => {
    const { getByLabelText } = render(<SecondDisplacementThumb />);

    const input = getByLabelText(/observação/i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Foi uma boa viagem" } });

    await waitFor(() => {
      expect(input.value).toBe("Foi uma boa viagem");
    });
  });
});
