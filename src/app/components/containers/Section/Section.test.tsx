import { render } from "@testing-library/react"
import { Section } from "."

describe("<Section />", () => {
  it("should render without errors", () => {
    const { getByText } = render(<Section id="section"><h1>Children</h1></Section>)

    const children = getByText("Children")
    expect(children).toBeInTheDocument()
  })

  it("should render with default 'id'", () => {
    // @ts-expect-error: CHAMADA SEM ATRIBUTE OBRIGATÓRIO
    const { getByText } = render(<Section><h1>Children</h1></Section>)

    const children = getByText("Children")
    expect(children).toBeInTheDocument()
  })
})
