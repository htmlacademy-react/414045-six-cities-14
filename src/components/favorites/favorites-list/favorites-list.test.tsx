import {makeFakeFavoritesList} from '../../../mocks/mocks.ts';
import {render, screen} from '@testing-library/react';
import {FavoritesList} from './favorites-list.tsx';

describe('Component: FavoritesList', () => {
  it('should render correctly', () => {
    const mockFavoritesByCity = makeFakeFavoritesList();
    vi.mock('../favorites-locations/favorites-locations.tsx', () => ({default: () => <div>favorites-locations</div>}));

    render(<FavoritesList favoritesByCity={mockFavoritesByCity}/>);

    expect(screen.getByText('Saved listing'));
    expect(screen.getByText('favorites-locations'));
  });
});
