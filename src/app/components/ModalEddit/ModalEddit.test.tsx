import { render } from "@testing-library/react";
import { ModalEddit } from ".";
import { mockedCard } from "../Thumbs/FirstThumb/FloatCard/mockedCard";

const mockHandleClick = jest.fn();
const mockGetDataAfterUpdate = jest.fn();

describe("<ModalEddit />", () => {
  beforeEach(() => {
    jest.mock("@hooks/useStateContext", () => ({
      __esModule: true,
      default: jest.fn(),
      useStateContext: jest.fn().mockReturnValue({
        state: "cliente",
      }),
    }));

    jest.mock("@hooks/useNewPost", () => ({
      __esModule: true,
      useNewPost: jest.fn().mockReturnValue({
        getDataAfterUpdate: mockGetDataAfterUpdate,
      }),
    }));

    jest.mock("@services/client", () => ({
      __esModule: true,
      putData: jest.fn().mockReturnValue({
        data: {
          nome: "John Doe",
          cidade: "Rio de Janeiro",
          uf: "RJ",
        }
      }),
      deleteData: jest.fn(),
    }));
  });

  it("should render without errors", () => {
    const { container } = render(
      <ModalEddit handleClick={mockHandleClick} item={mockedCard[0]} />
    );

    expect(container).toBeInTheDocument();
  });

  it("should not break if no item prop", () => {
    const { container } = render(
      // @ts-expect-error: CHAMADA SEM PROPRIEDADE OBRIGATÓRIA
      <ModalEddit handleClick={mockHandleClick} />
    );

    expect(container).toBeInTheDocument();
  });
});
