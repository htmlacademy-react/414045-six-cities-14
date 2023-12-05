import {render, screen} from '@testing-library/react';
import OfferInside from './offer-inside.tsx';
import {makeFakeOffer} from '../../../mocks/mocks.ts';

describe('Component: OfferInside', () => {
  it('should render correctly', () => {
    const mockOffer = makeFakeOffer();
    const titleText = 'What\'s inside';
    const goodsCount = mockOffer.goods.length;

    render(<OfferInside offer={mockOffer}/>);

    expect(screen.getByText(titleText)).toBeInTheDocument();
    expect(screen.queryAllByTestId('offer__inside-item').length).toEqual(goodsCount);
  });
});
