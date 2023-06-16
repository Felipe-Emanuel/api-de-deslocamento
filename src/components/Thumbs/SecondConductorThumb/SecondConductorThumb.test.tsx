import { fireEvent, render, waitFor } from "@testing-library/react";
import { SecondConductorThumb } from ".";

describe("<SecondConductorThumb />", () => {
  it("should render without errors", () => {
    const { container } = render(<SecondConductorThumb />);

    expect(container).toBeInTheDocument();
  });

  it("should apply correctly value", async () => {
    const { getByLabelText } = render(<SecondConductorThumb />);

    const input = getByLabelText("Nome") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "john Doe" } });

    await waitFor(() => {
      expect(input.value).toBe("john Doe");
    });
  });

  it("should apply correctly value", async () => {
    const { getByLabelText } = render(<SecondConductorThumb />);

    const input = getByLabelText(
      "Categoria da Habilitação"
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "A" } });

    await waitFor(() => {
      expect(input.value).toBe("A");
    });
  });

  it("should apply correctly value", async () => {
    const { getByLabelText } = render(<SecondConductorThumb />);

    const input = getByLabelText("Número da Habilitação") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "123" } });

    await waitFor(() => {
      expect(input.value).toBe("123");
    });
  });
});
