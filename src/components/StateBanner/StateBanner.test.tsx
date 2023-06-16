import { fireEvent, render } from "@testing-library/react"
import { StateBanner } from "."

describe("<StateBanner />", () => {
  it("should render without errors", () => {
    const { container } = render(<StateBanner />)

    expect(container).toBeInTheDocument()
  })

  it("should apply responsive styles when the screen width is less than 1200px", () => {
    fireEvent.resize(window, {target: { innerWidth: 1000}})

    const { getByRole } = render(<StateBanner />);
    const h2Element = getByRole('heading', { level: 2})

    expect(h2Element).toHaveStyle("font-size: 1.5em")
  })
})
