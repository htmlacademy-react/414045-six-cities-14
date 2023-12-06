import {createMemoryHistory, MemoryHistory} from 'history';
import {withRouter, withStore} from '../../mocks/mock-component.tsx';
import App from './app.tsx';
import {
  makeFakeAuthInfo,
  makeFakeOffer,
  makeFakeOffers,
  makeFakeReviews,
  makeFakeStore
} from '../../mocks/mocks.ts';
import {AppRoute, AuthorizationStatus} from '../../consts.ts';
import {render, screen} from '@testing-library/react';

describe('Routing', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render "Main Page" when route to "/"', () => {
    const withRouterComponent = withRouter(<App/>, mockHistory);
    const {withStoreComponent} = withStore(withRouterComponent, makeFakeStore());
    mockHistory.push(AppRoute.Main);

    render(withStoreComponent);

    expect(screen.getByTestId('main-page'));
    expect(screen.getByText('Cities'));
  });

  it('should render "Login Page" when route to "/login"', () => {
    const withRouterComponent = withRouter(<App/>, mockHistory);
    const {withStoreComponent} = withStore(withRouterComponent, makeFakeStore());
    mockHistory.push(AppRoute.Login);

    render(withStoreComponent);

    expect(screen.getByTestId('login-page'));
    expect(screen.getByText('E-mail'));
    expect(screen.getByText('Password'));
  });

  it('should render "Offer Page" when route to "/offer"', () => {
    const mockOffer = makeFakeOffer();
    const mockOffers = makeFakeOffers(3);
    const mockReviews = makeFakeReviews(4);
    const mockOfferState = {
      offers: [],
      favoriteOffers: [],
      offer: mockOffer,
      nearbyOffers: mockOffers,
      reviews: mockReviews,
      city: mockOffer.city,
      activeMapPoint: undefined
    };
    const withRouterComponent = withRouter(<App/>, mockHistory);
    const {withStoreComponent} = withStore(withRouterComponent, makeFakeStore({OFFERS: mockOfferState}));

    mockHistory.push(`/offer/${mockOffer.id}`);

    render(withStoreComponent);

    expect(screen.getByTestId('offer-page'));
  });

  it('should render "Favorites Page" when route to "/favorites"', () => {
    const withRouterComponent = withRouter(<App/>, mockHistory);
    const mockAuthState = {
      authorizationStatus: AuthorizationStatus.Auth,
      authInfo: makeFakeAuthInfo(),
    };
    const {withStoreComponent} = withStore(withRouterComponent, makeFakeStore({AUTH: mockAuthState}));

    mockHistory.push(AppRoute.Favorites);

    render(withStoreComponent);

    expect(screen.getByTestId('favorites-page'));
  });

  it('should render "Not Found Page" when route to "/undefined"', () => {
    const withRouterComponent = withRouter(<App/>, mockHistory);
    const {withStoreComponent} = withStore(withRouterComponent, makeFakeStore());

    mockHistory.push('/undefined');

    render(withStoreComponent);

    expect(screen.getByText('404 Not Found'));
    expect(screen.getByText('Вернуться на главную страницу'));
  });
});
