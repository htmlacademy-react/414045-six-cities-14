import {makeFakeOffers} from '../../../mocks/mocks.ts';
import {render, screen} from '@testing-library/react';
import NearPlaces from './near-places.tsx';

describe('Componetn: NearPlaces', () => {
  it('should render correctly', () => {
    vi.mock('../near-place-card/near-place-card.tsx', () => ({default: () => <div>NearPlaceCard</div>}));

    const mockOffers = makeFakeOffers(3);

    render(<NearPlaces offers={mockOffers}/>);

    expect(screen.getByText('Other places in the neighbourhood'));
    expect(screen.queryAllByText('NearPlaceCard').length).toEqual(mockOffers.length);
  });
});
