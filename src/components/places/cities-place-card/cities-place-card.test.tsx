import {withStore} from '../../../mocks/mock-component.tsx';
import CitiesPlaceCard from './cities-place-card.tsx';
import {makeFakeOffer, makeFakeOffers} from '../../../mocks/mocks.ts';
import {render, screen} from '@testing-library/react';

describe('Component: CitiesPlaceCard', () => {
  it('should render correctly', () => {
    vi.mock('../place-card/place-card.tsx', () => ({default: () => <div>PlaceCard</div>}));
    const mockOffer = makeFakeOffer();
    const mockOffers = makeFakeOffers(3);
    const {withStoreComponent} = withStore(<CitiesPlaceCard offer={mockOffer} offers={mockOffers}/>);


    render(withStoreComponent);

    expect(screen.getByTestId('cities-place-card'));
    expect(screen.getByText('PlaceCard'));
  });
});
