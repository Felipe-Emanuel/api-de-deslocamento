import { fireEvent, render } from "@testing-library/react"
import { Header } from "."

describe("<Header/>", () => {
  it("should render without error", () => {
    const { container } = render(<Header />)

    expect(container).toBeInTheDocument()
  })

  it("should apply a responsive design", () => {
    global.innerWidth = 1500
    global.dispatchEvent(new Event('resize'))

    const { container } = render(<Header />)

    expect(container?.firstChild).not.toHaveStyle("padding: 1rem .5rem")
  })
})
