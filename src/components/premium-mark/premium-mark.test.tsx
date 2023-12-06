import {render, screen} from '@testing-library/react';
import PremiumMark from './premium-mark.tsx';

describe('Component: PremiumMark', () => {
  it('should render correctly', () => {
    const expectedText = 'Premium';

    render(<PremiumMark/>);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
