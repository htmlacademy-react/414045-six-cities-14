import {makeFakeReview} from '../../../mocks/mocks.ts';
import {render, screen} from '@testing-library/react';
import OfferReview from './offer-review.tsx';

describe('Component: OfferReview', () => {
  it('should render correctly', () => {
    const mockReview = makeFakeReview();
    const userNameText = mockReview.user.name;
    const avatarAltText = 'Reviews avatar';
    const ratingText = 'Rating';
    const commentText = mockReview.comment;
    const timeElementTestId = 'reviews_time';

    render(<OfferReview review={mockReview}/>);

    expect(screen.getByAltText(avatarAltText)).toBeInTheDocument();
    expect(screen.getByText(userNameText)).toBeInTheDocument();
    expect(screen.getByText(ratingText)).toBeInTheDocument();
    expect(screen.getByText(commentText)).toBeInTheDocument();
    expect(screen.getByTestId(timeElementTestId)).toBeInTheDocument();
  });
});
