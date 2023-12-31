const RATING_COEFFICIENT: number = 20;

enum CityName {
    Paris = 'Paris',
    Cologne = 'Cologne',
    Brussels = 'Brussels',
    Amsterdam = 'Amsterdam',
    Hamburg = 'Hamburg',
    Dusseldorf = 'Dusseldorf',
}

const CITIES = [
  {
    location: {
      latitude: 48.8534,
      longitude: 2.3488,
      zoom: 10,
    },
    name: CityName.Paris,
  },
  {
    location: {
      latitude: 50.9333,
      longitude: 6.95,
      zoom: 10,
    },
    name: CityName.Cologne,
  },
  {
    location: {
      latitude: 50.8504,
      longitude: 4.34878,
      zoom: 10,
    },
    name: CityName.Brussels,
  },
  {
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10,
    },
    name: CityName.Amsterdam,
  },
  {
    location: {
      latitude: 53.5753,
      longitude: 10.0153,
      zoom: 10,
    },
    name: CityName.Hamburg,
  },
  {
    location: {
      latitude: 51.2217,
      longitude: 6.77616,
      zoom: 10,
    },
    name: CityName.Dusseldorf,
  }
];

const DEFAULT_CITY = CityName.Paris;

enum SortOption {
    Popular = 'popular',
    PriceLowToHigh = 'price: low to high',
    PriceHighToLow = 'price: high to low',
    TopRatedFirst = 'top rated first'
}

const SORTING_OPTIONS = [
  {
    sign: SortOption.Popular,
    name: 'Popular'
  },
  {
    sign: SortOption.PriceLowToHigh,
    name: 'Price: low to high'
  },
  {
    sign: SortOption.PriceHighToLow,
    name: 'Price: high to low'
  },
  {
    sign: SortOption.TopRatedFirst,
    name: 'Top rated first'
  }
];

const DEFAULT_SORTING_OPTION = SortOption.Popular;

enum AppRoute {
    Main = '/',
    Login = '/login',
    Offer = '/offer/:id',
    Favorites = '/favorites'
}

enum APIRoute {
    Offers = '/offers',
    Favorite = '/favorite',
    Comments = '/comments',
    Login = '/login',
    Logout = '/logout'
}

enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN'
}

enum StoreNameSpace {
    Auth = 'AUTH',
    Loading = 'LOADING',
    Offers = 'OFFERS',
    Routing = 'ROUTING'
}

enum LoadingStatus {
    Success = 'SUCCESS',
    Fail = 'FAIL',
    None = 'NONE',
}

export {
  RATING_COEFFICIENT,
  DEFAULT_CITY,
  CITIES,
  SORTING_OPTIONS,
  DEFAULT_SORTING_OPTION,
  AppRoute,
  APIRoute,
  AuthorizationStatus,
  SortOption,
  CityName,
  StoreNameSpace,
  LoadingStatus
};
