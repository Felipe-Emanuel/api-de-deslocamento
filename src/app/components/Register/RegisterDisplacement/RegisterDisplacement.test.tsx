import { render } from "@testing-library/react"
import { RegisterDisplacement } from "."

describe("<RegisterDisplacement />", () => {
  it("should render without error", () => {
    const { container } = render(<RegisterDisplacement />)

    expect(container).toBeInTheDocument()
  })
})
