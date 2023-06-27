import { render } from '@testing-library/react';
import State from '../(state)/[state]/page';

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


describe('<State />', () => {
  it('should render without errors', () => {
    const params = { state: "cliente" }
    const { container } = render(<State params={params} />);

    expect(container).toBeInTheDocument();
  });
});
