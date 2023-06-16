import { fireEvent, render, waitFor } from "@testing-library/react";
import { SecondClientThumb } from ".";

export const srca = "https://images.unsplash.com/photo-1686903430777-279ba0f25e7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60"

describe("<SecondClientThumb />", () => {
  it("should render without error", () => {
    const { container } = render(<SecondClientThumb src={srca} />);

    expect(container).toBeInTheDocument();
  });

  it("should render with default value", () => {
    const { container } = render(<SecondClientThumb />);

    expect(container).toBeInTheDocument();
  });

  it("handleChange updates the value correctly", async () => {
    const { getByLabelText } = render(<SecondClientThumb src={srca} />);

    const input = getByLabelText("Nome") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "John Doe" } });

    await waitFor(() => {
      expect(input.value).toBe("John Doe");
    });
  });

  it('should apply correctly "city" state', async () => {
    const { getByLabelText } = render(<SecondClientThumb src={srca} />);

    const input = getByLabelText("Cidade") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Rio de Janeiro" } });

    await waitFor(() => {
      expect(input.value).toBe("Rio de Janeiro");
    });
  });

  it('should apply correctly "uf" state', async () => {
    const { getByLabelText } = render(<SecondClientThumb src={srca} />);

    const input = getByLabelText("UF") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "RJ" } });

    await waitFor(() => {
      expect(input.value).toBe("RJ");
    });
  });

  it('should apply correctly "number" state', async () => {
    const { getByLabelText } = render(<SecondClientThumb src={srca} />);

    const input = getByLabelText("Número") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "2353" } });

    await waitFor(() => {
      expect(input.value).toBe("2353");
    });
  });
});
