import { render } from "@testing-library/react";
import { RegisterDisplacementCard } from ".";

describe("<RegisterDisplacementCard />", () => {


  it("should render without errors", async () => {
    const { container } = render(<RegisterDisplacementCard initialKm={30} />);
    expect(container).toBeInTheDocument();
  });

  it("should apply correctly initialKm", async () => {
    const { findByText } = render(<RegisterDisplacementCard initialKm={30} />);
    const title = await findByText("KM inicial: 30");

    expect(title).toBeInTheDocument();
  });

  it("should apply undefined", async () => {
    const { findByText } = render(<RegisterDisplacementCard initialKm={30} />);
    const observation = await findByText("Observação: undefined");

    expect(observation).toBeInTheDocument();
  });

  it("should show hidden 'newEnd' text when isOnEddit mode", async () => {
    const { findByText } = render(<RegisterDisplacementCard initialKm={30} isOnEddit />);
    const observation = await findByText("Deslocamento final: 0 Km");

    expect(observation).toBeInTheDocument();
  });
});
