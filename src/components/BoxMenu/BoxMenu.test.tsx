import { render } from "@testing-library/react"
import { BoxMenu } from "."

describe("<BoxMenu />", () => {
  it("should render without errors", () => {
    const { container } = render(<BoxMenu />)

    expect(container).toBeInTheDocument()
  })
})
