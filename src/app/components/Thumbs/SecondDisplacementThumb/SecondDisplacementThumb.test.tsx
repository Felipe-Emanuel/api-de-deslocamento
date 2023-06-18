import { fireEvent, render, waitFor } from "@testing-library/react";
import { SecondDisplacementThumb } from ".";

describe("<SecondDisplacementThumb />", () => {
  it("should render without errors", () => {
    const { container } = render(<SecondDisplacementThumb />);

    expect(container).toBeInTheDocument();
  });

  it("should apply correctly 'home Displacement' value", async () => {
    const { getByLabelText } = render(<SecondDisplacementThumb />);

    const input = getByLabelText(/Início/i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Rio de Janeiro" } });

    await waitFor(() => {
      expect(input.value).toBe("Rio de Janeiro");
    });
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
