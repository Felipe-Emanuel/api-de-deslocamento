import { render } from "@testing-library/react"
import { FirstClientThumb } from "."

describe("<FirstClientThumb/>", () => {
  it("should render without errors", () => {
    const { container } = render(<FirstClientThumb />)
    expect(container).toBeInTheDocument()
  })

  it("renders default state field", () => {
    const {getByText} = render(<FirstClientThumb />);

    const autocomplete = getByText("Cliente");
    expect(autocomplete).toBeInTheDocument();
  });
})
