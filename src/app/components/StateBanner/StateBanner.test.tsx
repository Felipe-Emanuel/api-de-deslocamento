import { render } from "@testing-library/react"
import { StateBanner } from "."

describe("<StateBanner />", () => {

  it("should render without errors", () => {
    const { container } = render(<StateBanner />)

    expect(container).toBeInTheDocument()
  })

  it("should render 'Ver Demonstração' in Home", async () => {
    const { findByText } = render(<StateBanner />)

    const linkText = await findByText('Ver Demonstração');
    expect(linkText).toBeInTheDocument()
  })

  it("should navigate user to demo section", async () => {
    const { findByTestId } = render(<StateBanner />)

    const linkText = await findByTestId('navigation');
    expect(linkText.getAttribute('href')).toBe('#demo');
  })
})
