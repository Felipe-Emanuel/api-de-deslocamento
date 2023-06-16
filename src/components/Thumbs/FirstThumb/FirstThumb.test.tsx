import { render } from "@testing-library/react"
import { FirstThumb } from "."

describe("<FirstThumb/>", () => {
  it("should render without errors", () => {
    const { container } = render(<FirstThumb />)
    expect(container).toBeInTheDocument()
  })

  it("renders default state field", () => {
    const {getByText} = render(<FirstThumb />);

    const autocomplete = getByText("Cliente");
    expect(autocomplete).toBeInTheDocument();
  });
})
