import { render } from "@testing-library/react";
import { InfoSection } from ".";

describe("<InfoSection/>", () => {
  it("should render without error", () => {
    const { container } = render(<InfoSection />);

    expect(container).toBeInTheDocument();
  });

  it("should apply correctly secondTitle", async () => {
    const { findAllByTestId } = render(<InfoSection />);

    const secondTitleElement = await findAllByTestId("secondTitle");
    expect(secondTitleElement).toMatchInlineSnapshot(`
      [
        <h2
          data-testid="secondTitle"
        >
          Registre-se agora e faça parte da nossa comunidade de cliente satisfeitos!
        </h2>,
      ]
    `);
  });
});
