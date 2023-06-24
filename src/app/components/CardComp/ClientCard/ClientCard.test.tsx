import { render } from "@testing-library/react"
import { ClientCard } from "."
import { mockedCard } from "../../Thumbs/FirstThumb/FloatCard/mockedCard"

describe("<ClientCard />", () => {
  it("should render without errors", () => {
    const { container } = render(<ClientCard data={mockedCard[0]} />)

    expect(container).toBeInTheDocument()
  })

  it("should not broken a component without data", () => {
    // @ts-expect-error: CHAMADA SEM PROP OBRIGATÓRIA DO COMPONENTE DE
    const { container } = render(<ClientCard />)

    expect(container).toMatchInlineSnapshot(`<div />`)
  })

  it("should render tltle id 'isEddit' is true", async () => {
    const { findByText } = render(<ClientCard data={mockedCard[0]} isEddit />)

    const title = await findByText("Cliente Atual")

    expect(title).toBeInTheDocument()
  })
})
