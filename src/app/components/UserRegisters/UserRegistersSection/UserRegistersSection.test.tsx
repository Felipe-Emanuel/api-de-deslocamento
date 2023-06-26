import { render } from "@testing-library/react";
import { UserRegistersSection } from ".";
import { userRegistersSectionMock } from "./userRegistersSectionMock";

jest.mock("swiper/react", () => ({
  __esModule: true,
  Swiper: jest.fn(),
  SwiperSlide: jest.fn(),
}));

jest.mock("swiper", () => ({
  __esModule: true,
  A11y: jest.fn(),
}));

jest.mock("swiper/css", () => ({
  __esModule: true,
}))

describe("<UserRegistersSection />", () => {
  it("should not broken if render with default values", () => {
    //@ts-expect-error: CHAMADA SEM PROPRIEDADES OBRIGATÓRIAS
    const { container } = render(<UserRegistersSection />);

    expect(container).toBeInTheDocument();
  });

  it("should render without errors when 'cliente' section is called", () => {
    const { container } = render(
      <UserRegistersSection data={userRegistersSectionMock} section="cliente" />
    );

    expect(container).toBeInTheDocument();
  });

  it("should render without errors when 'deslocamento' section is called", () => {
    const { container } = render(
      <UserRegistersSection
        data={userRegistersSectionMock}
        section="deslocamento"
      />
    );

    expect(container).toBeInTheDocument();
  });

  it("should render without errors when 'condutor' section is called", () => {
    const { container } = render(
      <UserRegistersSection
        data={userRegistersSectionMock}
        section="condutor"
      />
    );

    expect(container).toBeInTheDocument();
  });

  it("should render without errors when 'veículo' section is called", () => {
    const { container } = render(
      <UserRegistersSection data={userRegistersSectionMock} section="veículo" />
    );

    expect(container).toBeInTheDocument();
  });
});
