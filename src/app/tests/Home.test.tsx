import { render } from "@testing-library/react";
import Home from "../page";

describe("<Home />", () => {
  it("should render without errors", () => {
    const { container } = render(<Home />);

    expect(container).toBeInTheDocument();
  });
});
