import {render, screen} from '@testing-library/react';
import OfferFeatures from './offer-features.tsx';
import {makeFakeOffer} from '../../../mocks/mocks.ts';

describe('Component: OfferFeatures', () => {
  it('should render correctly', () => {
    const mockOffer = makeFakeOffer();
    const expectTypeText = mockOffer.type;
    const expectBedroomsText = mockOffer.bedrooms > 1 ? `${mockOffer.bedrooms} Bedrooms` : `${mockOffer.bedrooms} Bedroom`;
    const expectMaxAdultsText = mockOffer.maxAdults > 1 ? `Max ${mockOffer.maxAdults} adults` : `Max ${mockOffer.maxAdults} adult`;

    render(<OfferFeatures offer={mockOffer}/>);

    expect(screen.getByText(expectTypeText)).toBeInTheDocument();
    expect(screen.getByText(expectBedroomsText)).toBeInTheDocument();
    expect(screen.getByText(expectMaxAdultsText)).toBeInTheDocument();
  });
});
