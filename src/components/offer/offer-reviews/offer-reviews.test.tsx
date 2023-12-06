import {withStore} from '../../../mocks/mock-component.tsx';
import OfferReviews from './offer-reviews.tsx';
import {makeFakeReviews} from '../../../mocks/mocks.ts';
import {AuthorizationStatus} from '../../../consts.ts';
import {AuthState} from '../../../types/user.ts';
import {render, screen} from '@testing-library/react';
import {LoadingStateType} from '../../../types/loading.ts';

describe('Component: OfferReciews', () => {
  it('should render correctly', () => {
    const mockReviews = makeFakeReviews(2);
    const {withStoreComponent} = withStore(<OfferReviews offerId={'test'} reviews={mockReviews}/>, {
      AUTH: {authorizationStatus: AuthorizationStatus.Auth} as AuthState,
      LOADING: {isLoadingForm: false} as LoadingStateType,
    });

    render(withStoreComponent);

    expect(screen.getByText(/Reviews/i));
  });
});
