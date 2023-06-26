import { render } from "@testing-library/react";
import { UserRegisters } from ".";
import { useLocalStorage } from "@hooks/useLocalStorage";

describe("<UserRegisters />", () => {
  it("should render without errors", () => {
    const { container } = render(<UserRegisters />);

    expect(container).toBeInTheDocument();
  });

  it("should verify localStorage user posts", () => {
    jest.mock("@hooks/useLocalStorage", () => ({
      __esModule: true,
      useLocalStorage: jest.fn().mockReturnValue({
        setLocalStorage: jest.fn().mockReturnValue({
          key: "key",
          value: "post",
        }),
        getLocalStorage: jest.fn().mockReturnValue(["post"]),
      }),
    }));

    const { setLocalStorage, getLocalStorage } = useLocalStorage()!;

    setLocalStorage("key", ["post"]);

    const post = getLocalStorage?.("key");

    expect(post).toStrictEqual(["post"]);
  });

  it("should render with a empty localStorage item", () => {
    jest.clearAllMocks();

    jest.mock("@hooks/useLocalStorage", () => ({
      __esModule: true,
      useLocalStorage: jest.fn().mockReturnValueOnce({
        setLocalStorage: jest.fn().mockReturnValueOnce({
          key: "key",
          value: [],
        }),
        getLocalStorage: jest.fn().mockReturnValueOnce([]),
      }),
    }));

    const { setLocalStorage, getLocalStorage } = useLocalStorage()!;

    setLocalStorage("key", []);

    const post = getLocalStorage?.("key");

    expect(post).toStrictEqual([]);
  });
});
