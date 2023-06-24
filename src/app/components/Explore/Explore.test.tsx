import { render } from "@testing-library/react"
import { Explore } from "."

describe("<DisplacementCard />", () => {
  it("shoud render without errors", () => {
    const { container } = render(<Explore />)

    expect(container).toBeInTheDocument()
  })
})
