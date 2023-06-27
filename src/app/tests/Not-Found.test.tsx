import { render } from '@testing-library/react';
import NotFound from '../(state)/[state]/not-found';

jest.mock("lottie-react", () => ({
  useLottie: jest.fn().mockReturnValue({
    View: jest.fn()
  })
}))

describe('<NotFound />', () => {
  it('should render without errors', () => {
    const { container } = render(<NotFound />);

    expect(container).toBeInTheDocument();
  });
});
