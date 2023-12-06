import {render, screen} from '@testing-library/react';
import OfferGallery from './offer-gallery.tsx';
import {makeFakeOffer} from '../../../mocks/mocks.ts';

describe('Component', () => {
  it('should render correctly', () => {
    const mockOffer = makeFakeOffer();
    const containerTestId = 'offer-gallery-container';
    const imageTestId = 'image';

    render(<OfferGallery offer={mockOffer}/>);

    const container = screen.getByTestId(containerTestId);
    const images = screen.getAllByTestId(imageTestId);

    expect(container).toBeInTheDocument();
    expect(images.length).toEqual(mockOffer.images.length);
  });
});
