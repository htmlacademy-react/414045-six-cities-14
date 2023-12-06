import {render, screen} from '@testing-library/react';
import {FavoritesEmpty} from './favorites-empty.tsx';

describe('Component: FavoritesEmpty', () => {
  it('should render correctly', () => {
    render(<FavoritesEmpty/>);

    expect(screen.getByText('Favorites (empty)'));
    expect(screen.getByText('Nothing yet saved.'));
    expect(screen.getByText('Save properties to narrow down search or plan your future trips.'));
  });
});
