import { render } from "@testing-library/react"
import { FloatCard } from "."
import { mockedCard } from "./mockedCard";

describe("<FloatCard />", () => {
  it("should render without errors", () => {
    const { container } = render(<FloatCard data={mockedCard} />);

    expect(container).toBeInTheDocument()
  })

  it("should render with default values", () => {
    //@ts-expect-error: CHAMADA SEM PROP OBRIGATÓRIA
    const { container } = render(<FloatCard  />);

    expect(container).toBeInTheDocument()
  })

  it("should render correctly name", async () => {
    const { findByText } = render(<FloatCard data={mockedCard} />);

    const nameElement = await findByText("John Doe");
    expect(nameElement).toBeInTheDocument()
  })
})
