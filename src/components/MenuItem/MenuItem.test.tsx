import { fireEvent, render, waitFor } from "@testing-library/react"
import { MenuItem } from "."

const mockFn = jest.fn()

describe("<MenuItem />", () => {
  it("should render without errors", () => {
    const { container } = render(<MenuItem />)

    expect(container).toBeInTheDocument()
  })

  it("should modify active tab text", async() => {
    const { getByText } = render(<MenuItem />)

    const client = getByText("cliente")
    const clientTabIndex = client.getAttribute("tabindex")
    expect(clientTabIndex).toEqual("0")

    const vehicle = getByText("veículo")
    const vehicleTabIndex = client.getAttribute("tabindex")
    fireEvent.click(vehicle, mockFn())
    await waitFor(() => {
      expect(vehicleTabIndex).toEqual("0")
    })
  })
})
