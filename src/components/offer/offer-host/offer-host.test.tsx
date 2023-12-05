import {makeFakeOffer} from '../../../mocks/mocks.ts';
import {render, screen} from '@testing-library/react';
import OfferHost from './offer-host.tsx';

describe('Component: OfferHost', () => {
  it('should render correctly', () => {
    const mockOffer = makeFakeOffer();
    const titleText = 'Meet the host';
    const hostName = mockOffer.host.name;
    const offerDescriptionText = mockOffer.description;

    render(<OfferHost offer={mockOffer}/>);

    expect(screen.getByText(titleText)).toBeInTheDocument();
    expect(screen.getByText(hostName)).toBeInTheDocument();
    expect(screen.getByText(offerDescriptionText)).toBeInTheDocument();
  });

  it('the document must contain isPro', () => {
    const mockOffer = makeFakeOffer();
    const isProTestId = 'is_pro';

    mockOffer.host.isPro = true;

    render(<OfferHost offer={mockOffer}/>);

    expect(screen.getByTestId(isProTestId)).toBeInTheDocument();
  });

  it('the document must not contain isPro', () => {
    const mockOffer = makeFakeOffer();
    const isProTestId = 'is_pro';

    mockOffer.host.isPro = false;

    render(<OfferHost offer={mockOffer}/>);

    expect(screen.queryByTestId(isProTestId)).not.toBeInTheDocument();
  });
});
