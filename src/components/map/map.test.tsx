import Map from './map.tsx';
import {makeFakeOffer} from '../../mocks/mocks.ts';
import {withStore} from '../../mocks/mock-component.tsx';
import {render, screen} from '@testing-library/react';
import {OfferReducerType} from '../../types/offer.ts';

describe('Component: Map', () => {
  it('should render correctly', () => {
    const mockOffer = makeFakeOffer();
    const mockOffers = [mockOffer];
    const {withStoreComponent} = withStore(<Map className={'test'} offers={mockOffers} city={mockOffer.city}/>, {
      OFFERS: {activeMapPoint: mockOffer.location} as OfferReducerType
    });

    render(withStoreComponent);

    expect(screen.getByTestId('map'));
  });
});
