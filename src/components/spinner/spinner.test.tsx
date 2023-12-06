import {render, screen} from '@testing-library/react';
import Spinner from './spinner.tsx';

describe('Component: Spinner', () => {
  it('should render correctly', () => {
    const expectedText = /Loading/i;

    render(<Spinner/>);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
