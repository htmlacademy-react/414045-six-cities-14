import {render, screen} from '@testing-library/react';
import CitiesPlaces from './cities-places.tsx';
import {makeFakeCity, makeFakeOffers} from '../../../mocks/mocks.ts';

describe('Component: CitiesPlaces', () => {
  it('should render correctly', () => {
    vi.mock('../places-options/places-options.tsx', () => ({default: () => <div>PlacesOptions</div>}));
    vi.mock('../place-card-list/place-card-list.tsx', () => ({default: () => <div>PlaceCardList</div>}));
    vi.mock('../../map/map.tsx', () => ({default: () => <div>Map</div>}));

    const mockCity = makeFakeCity();
    const mockOffers = makeFakeOffers(3);

    render(<CitiesPlaces city={mockCity} offers={mockOffers}/>);

    expect(screen.getByText('Places'));
    expect(screen.getByText(`${mockOffers.length} places to stay in ${mockCity.name}`));
    expect(screen.getByText('Sort by'));
    expect(screen.getByText('PlacesOptions'));
    expect(screen.getByText('PlaceCardList'));
    expect(screen.getByText('Map'));
  });
});
