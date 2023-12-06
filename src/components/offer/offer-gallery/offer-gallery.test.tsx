import {render, screen} from '@testing-library/react';
import OfferGallery from './offer-gallery.tsx';
import {makeFakeOffer} from '../../../mocks/mocks.ts';

describe('Component', () => {
  it('should render correctly', () => {
    const mockOffer = makeFakeOffer();

    render(<OfferGallery offer={mockOffer}/>);

    expect(screen.getByTestId('offer-gallery-container')).toBeInTheDocument();
    expect(screen.queryAllByTestId('image').length).toEqual(mockOffer.images.length);
  });
});
