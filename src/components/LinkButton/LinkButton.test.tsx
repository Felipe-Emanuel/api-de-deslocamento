import { render } from "@testing-library/react"
import { LinkButton } from ".";

describe("<LinkButton />", () => {
  it("should render without error", () => {
    const { container } = render(<LinkButton state="condutor" />);

    expect(container).toBeInTheDocument()
  })

  it("should render with default values", () => {
    // @ts-expect-error: CHAMADA SEM ATRIBUTO OBRIGATÓRIO
    const { container } = render(<LinkButton />);

    expect(container).toBeInTheDocument()
  })
})
