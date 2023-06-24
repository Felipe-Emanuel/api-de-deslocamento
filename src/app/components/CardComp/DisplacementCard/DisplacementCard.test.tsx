import { render } from "@testing-library/react"
import { DisplacementCard } from "."
import { mockedCard } from "../../Thumbs/FirstThumb/FloatCard/mockedCard"

describe("<DisplacementCard />", () => {
  it("should render without errors", () => {
    const { container } = render(<DisplacementCard data={mockedCard[0]} />)

    expect(container).toBeInTheDocument()
  })

  it("should not broken a component without data", () => {
    // @ts-expect-error: CHAMADA SEM PROP OBRIGATÓRIA DO COMPONENTE DE
    const { container } = render(<DisplacementCard />)

    expect(container).toMatchInlineSnapshot(`<div />`)
  })

  it("should render tltle id 'isEddit' is true", async () => {
    const { findByText } = render(<DisplacementCard data={mockedCard[0]} isEddit />)

    const title = await findByText("Cliente Atual")

    expect(title).toBeInTheDocument()
  })
})
