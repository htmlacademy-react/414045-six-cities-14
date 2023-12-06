import HeaderNavAuthUser from './header-nav-auth-user.tsx';
import {withRouter, withStore} from '../../mocks/mock-component.tsx';
import {render, screen} from '@testing-library/react';
import {makeFakeAuthInfo, makeFakeOffers} from '../../mocks/mocks.ts';
import {AuthState} from '../../types/user.ts';
import {OfferReducerType} from '../../types/offer.ts';

describe('Component: HeaderNavAuthUser', () => {
  it('should render correctly', () => {
    const mockAuthInfo = makeFakeAuthInfo();
    const mockFavoriteOffers = makeFakeOffers(3);
    const componentWithRouter = withRouter(<HeaderNavAuthUser/>);
    const {withStoreComponent} = withStore(componentWithRouter, {
      AUTH: {authInfo: mockAuthInfo} as AuthState,
      OFFERS: {favoriteOffers: mockFavoriteOffers} as OfferReducerType
    });

    render(withStoreComponent);

    expect(screen.getByText('Sign out'));
    expect(screen.getByText(mockFavoriteOffers.length));
    expect(screen.getByText(mockAuthInfo.email));
  });
});
