import {makeFakeFavorites} from '../../../mocks/mocks.ts';
import {render, screen} from '@testing-library/react';
import FavoritesLocations from './favorites-locations.tsx';

describe('Component: FavoritesLocations', () => {
  it('should render correctly', () => {
    const mockFavorites = makeFakeFavorites();
    vi.mock('../favorites-card/favorites-card.tsx', () => ({default: () => <div>favorites-card</div>}));

    render(<FavoritesLocations favorites={mockFavorites}/>);

    expect(screen.getByText(mockFavorites.cityName));
    expect(screen.getAllByText('favorites-card').length).toEqual(mockFavorites.offers.length);
  });
});
