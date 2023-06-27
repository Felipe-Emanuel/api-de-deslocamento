import { render } from '@testing-library/react';
import {NotFoundAnimation} from '.';

jest.mock("lottie-react", () => ({
  useLottie: jest.fn().mockReturnValue({
    View: jest.fn()
  })
}))

describe('<NotFoundAnimation />', () => {
  it('should render without errors', () => {
    const { container } = render(<NotFoundAnimation />);

    expect(container).toBeInTheDocument();
  });
});
