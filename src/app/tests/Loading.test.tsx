import { render } from '@testing-library/react';
import Loading from '../(state)/[state]/loading';

describe('Loading/>', () => {
  it('should render without errors', () => {
    const { container } = render(<Loading />);

    expect(container).toBeInTheDocument();
  });
});
