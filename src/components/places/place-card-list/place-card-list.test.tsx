import {makeFakeOffers} from '../../../mocks/mocks.ts';
import {render, screen} from '@testing-library/react';
import PlaceCardList from './place-card-list.tsx';

describe('Component: PlaceCardList', () => {
  it('should render correctly', () => {
    vi.mock('../cities-place-card/cities-place-card.tsx', () => ({default: () => <div>CitiesPlaceCard</div>}));

    const mockOffers = makeFakeOffers(3);

    render(<PlaceCardList offers={mockOffers}/>);

    expect(screen.getByTestId('place-card-list'));
    expect(screen.queryAllByText('CitiesPlaceCard').length).toEqual(mockOffers.length);
  });
});
