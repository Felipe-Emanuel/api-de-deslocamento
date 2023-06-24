import { render } from "@testing-library/react"
import { RegisterVehicle } from "."

describe("<RegisterVehicle />", () => {
  it("should render without error", () => {
    const { container } = render(<RegisterVehicle />)

    expect(container).toBeInTheDocument()
  })
})
