import { render } from "@testing-library/react"
import { RegisterConductor } from "."

describe("<RegisterConductor />", () => {
  it("should render without error", () => {
    const { container } = render(<RegisterConductor />)

    expect(container).toBeInTheDocument()
  })
})
