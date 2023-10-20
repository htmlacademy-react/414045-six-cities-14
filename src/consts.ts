const COUNT_PLACE_CARDS: number = 5;
const COUNT_NEAR_PLACE_CARDS: number = 4;
const COUNT_FAVORITES_LOCATIONS: number = 2;
const COUNT_FAVORITES_CARTS: number = 3;
const COUNT_OFFERS: number = 243;

enum AppRoute {
  Main = '/',
  Login = '/login',
  Offer = '/offer/:id',
  Favorites = '/favorites'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export {
  COUNT_PLACE_CARDS,
  COUNT_NEAR_PLACE_CARDS,
  COUNT_FAVORITES_LOCATIONS,
  COUNT_FAVORITES_CARTS,
  COUNT_OFFERS,
  AppRoute,
  AuthorizationStatus
};
