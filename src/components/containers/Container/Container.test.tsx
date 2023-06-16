import { render } from "@testing-library/react"
import { Container } from "."

describe("<Container />", () => {
  it("should render without errors", () => {
    const { getByText } = render(<Container><h1>Children</h1></Container>)

    const children = getByText("Children")
    expect(children).toBeInTheDocument()
  })
})
