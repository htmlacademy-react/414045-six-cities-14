import {render, screen} from '@testing-library/react';
import OfferFeatures from './offer-features.tsx';
import {makeFakeOffer} from '../../../mocks/mocks.ts';

describe('Component: OfferFeatures', () => {
  it('should render correctly', () => {
    const mockOffer = makeFakeOffer();
    const expectTypeText = mockOffer.type;
    const expectBedroomsText = `${mockOffer.bedrooms} Bedrooms`;
    const expectMaxAdultsText = `Max ${mockOffer.maxAdults} adults`;

    render(<OfferFeatures offer={mockOffer}/>);

    expect(screen.getByText(expectTypeText)).toBeInTheDocument();
    expect(screen.getByText(expectBedroomsText)).toBeInTheDocument();
    expect(screen.getByText(expectMaxAdultsText)).toBeInTheDocument();
  });
});
