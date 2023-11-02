const COUNT_NEAR_PLACE_CARDS: number = 4;
const COUNT_OFFERS: number = 243;
const RATING_COEFFICIENT: number = 20;
const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
const DEFAULT_CITY = {
  location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 10,
  },
  name: 'Amsterdam',
};

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
  URL_MARKER_DEFAULT,
  DEFAULT_CITY,
  AppRoute,
  AuthorizationStatus
};
