import { fireEvent, render, waitFor } from "@testing-library/react";
import { SecondDisplacementThumb } from ".";

describe("<SecondDisplacementThumb />", () => {
  it("should render without errors", () => {
    const { container } = render(<SecondDisplacementThumb />);

    expect(container).toBeInTheDocument();
  });

  it("should apply correctly 'home Displacement' value", async () => {
    const { getByLabelText } = render(<SecondDisplacementThumb />);

    const input = getByLabelText("Início do Deslocamento") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Rio de Janeiro" } });

    await waitFor(() => {
      expect(input.value).toBe("Rio de Janeiro");
    });
  });

  it("should apply correctly 'reason' value", async () => {
    const { getByLabelText } = render(<SecondDisplacementThumb />);

    const input = getByLabelText("Motivo") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Trabalho" } });

    await waitFor(() => {
      expect(input.value).toBe("Trabalho");
    });
  });

  it("should apply correctly 'id Conductor' value", async () => {
    const { getByLabelText } = render(<SecondDisplacementThumb />);

    const input = getByLabelText(
      "Identificação do Condutor"
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "2525" } });

    await waitFor(() => {
      expect(input.value).toBe("2525");
    });
  });

  it("should apply correctly 'observation' value", async () => {
    const { getByLabelText } = render(<SecondDisplacementThumb />);

    const input = getByLabelText("Observação") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Foi uma boa viagem" } });

    await waitFor(() => {
      expect(input.value).toBe("Foi uma boa viagem");
    });
  });
});
