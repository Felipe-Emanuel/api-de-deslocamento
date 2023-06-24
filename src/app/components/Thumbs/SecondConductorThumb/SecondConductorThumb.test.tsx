import { render } from "@testing-library/react";
import { SecondConductorThumb } from ".";

jest.mock("@hooks/useStateContext", () => ({
  __esModule: true,
  default: jest.fn(),
  useStateContext: jest.fn().mockReturnValue({
    state: "condutor",
    value: {
      condutor: "condutor",
      habilitação: 123,
      categoria: "A",
    }
  })
}))

describe("<SecondConductorThumb />", () => {
  afterAll(() => jest.clearAllMocks());

  it("should render without errors", () => {
    const { getByTestId } = render(<SecondConductorThumb />);
    const thumbElement = getByTestId("second-conductor-thumb");
    expect(thumbElement).toBeInTheDocument();
  });

  it("should display the correct name and license", () => {
    const { getByTestId } = render(<SecondConductorThumb />);
    const userNameElement = getByTestId("user-name");
    const userLicenseElement = getByTestId("user-license");

    expect(userNameElement.textContent).toBe("Condutor");
    expect(userLicenseElement.textContent).toBe("123");
  });

  it("should display the correct category qualification", () => {
    const { getByTestId } = render(<SecondConductorThumb />);
    const userCategoryQualificationElement = getByTestId("user-category-qualification");

    expect(userCategoryQualificationElement.textContent).toBe("A");
  });
});
