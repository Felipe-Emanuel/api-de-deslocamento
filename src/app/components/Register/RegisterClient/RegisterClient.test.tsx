import { render } from "@testing-library/react"
import { RegisterClient } from "."

describe("<RegisterClient />", () => {
  it("should render without error", () => {
    const { container } = render(<RegisterClient />)

    expect(container).toBeInTheDocument()
  })
})
