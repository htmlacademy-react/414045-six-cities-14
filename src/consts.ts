const COUNT_NEAR_PLACE_CARDS: number = 4;
const COUNT_OFFERS: number = 243;
const RATING_COEFFICIENT: number = 20;

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
  COUNT_NEAR_PLACE_CARDS,
  COUNT_OFFERS,
  RATING_COEFFICIENT,
  AppRoute,
  AuthorizationStatus
};
