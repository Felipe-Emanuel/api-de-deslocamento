import { fireEvent, render, waitFor } from "@testing-library/react";
import { SecondClientThumb } from ".";

describe("<SecondClientThumb />", () => {
  it("should render without error", () => {
    const { container } = render(<SecondClientThumb />);

    expect(container).toBeInTheDocument();
  });

  it("handleChange updates the value correctly", async () => {
    const { getByLabelText } = render(<SecondClientThumb />);

    const input = getByLabelText(/Nome/i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "John Doe" } });

    await waitFor(() => {
      expect(input.value).toBe("John Doe");
    });
  });

  it('should apply correctly "city" state', async () => {
    const { getByLabelText } = render(<SecondClientThumb />);

    const input = getByLabelText(/Cidade/i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Rio de Janeiro" } });

    await waitFor(() => {
      expect(input.value).toBe("Rio de Janeiro");
    });
  });

  it('should apply correctly "uf" state', async () => {
    const { getByLabelText } = render(<SecondClientThumb />);

    const input = getByLabelText(/uf/i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "RJ" } });

    await waitFor(() => {
      expect(input.value).toBe("RJ");
    });
  });

  it('should apply correctly "number" state', async () => {
    const { getByLabelText } = render(<SecondClientThumb />);

    const input = getByLabelText(/número/i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "2353" } });

    await waitFor(() => {
      expect(input.value).toBe("2353");
    });
  });
});
