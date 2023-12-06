import OfferReviewForm from './offer-review-form.tsx';
import {withStore} from '../../../mocks/mock-component.tsx';
import {render, screen} from '@testing-library/react';
import {makeFakeAuthInfo} from '../../../mocks/mocks.ts';
import {AuthState} from '../../../types/user.ts';
import {LoadingStateType} from '../../../types/loading.ts';

describe('Component: OfferReviewForm', () => {
  it('should render correctly', () => {
    const mockAuthInfo = makeFakeAuthInfo();
    const {withStoreComponent} = withStore(<OfferReviewForm offerId={'test'}/>, {
      AUTH: {authInfo: mockAuthInfo} as AuthState,
      LOADING: {isLoadingForm: false} as LoadingStateType,
    });

    render(withStoreComponent);

    expect(screen.getByText('Your review'));
    expect(screen.getByText(/To submit review please make sure to set/i));
    expect(screen.getByText(/and describe your stay with at least/i));
    expect(screen.getByText('50 characters'));
    expect(screen.getByText('Submit'));
  });
});
