import {AuthInfo, User} from '../types/user.ts';
import {address, datatype, date, internet, lorem, name} from 'faker';
import {City, Favorites, MapPoint, Offer} from '../types/offer.ts';
import {AuthorizationStatus, CITIES, CityName, DEFAULT_CITY, LoadingStatus, StoreNameSpace} from '../consts.ts';
import {Review} from '../types/review.ts';
import {State} from '../types/state.ts';
import {prepareFavoritesByCity} from '../services/offer-service.ts';

export const makeFakeAuthInfo = ():AuthInfo => ({
  id: datatype.number(100),
  name: name.title(),
  avatarUrl: internet.avatar(),
  email: internet.email(),
  isPro: datatype.boolean(),
  token: datatype.string(20)
});

export const makeFakeLocation = ():MapPoint => ({
  latitude: Number(address.latitude(40, 10)),
  longitude: Number(address.longitude(30, 10)),
  zoom: datatype.number(12),
});

export const makeFakeCity = ():City => ({
  location: makeFakeLocation(),
  name: CityName.Paris
});

export const makeFakeGoods = (count: number): string[] => {
  const result = [];

  for (let i = 0; i < count; i++) {
    result.push(lorem.word(8));
  }

  return result;
};

export const makeFakeUrls = (count: number): string[] => {
  const result = [];

  for (let i = 0; i < count; i++) {
    result.push(internet.url());
  }

  return result;
};

export const makeFakeUser = ():User => ({
  avatarUrl: internet.avatar(),
  id: datatype.number(100),
  isPro: datatype.boolean(),
  name: name.title()
});

export const makeFakeOffer = ():Offer => ({
  id: datatype.number(100),
  city: makeFakeCity(),
  description: lorem.paragraph(1),
  goods: makeFakeGoods(datatype.number(5)),
  host: makeFakeUser(),
  bedrooms: datatype.number(4),
  images: makeFakeUrls(datatype.number(3)),
  isFavorite: datatype.boolean(),
  isPremium: datatype.boolean(),
  location: makeFakeLocation(),
  maxAdults: datatype.number(6),
  previewImage: internet.url(),
  price: datatype.number(500),
  rating: datatype.number(5),
  title: lorem.words(4),
  type: lorem.word(4)
});

export const makeFakeOffers = (count: number):Offer[] => {
  const result = [];

  for (let i = 0; i < count; i++) {
    result.push(makeFakeOffer());
  }

  return result;
};

export const makeFakeReview = ():Review => ({
  comment: lorem.words(10),
  date: date.past().toString(),
  id: datatype.number(100),
  rating: datatype.number(5),
  user: makeFakeUser(),
});

export const makeFakeReviews = (count: number):Review[] => {
  const result = [];

  for (let i = 0; i < count; i++) {
    result.push(makeFakeReview());
  }

  return result;
};

export const makeFakeStore = (initialState?: Partial<State>):State => ({
  [StoreNameSpace.Auth]: {
    authorizationStatus: AuthorizationStatus.NoAuth,
    authInfo: undefined,
  },
  [StoreNameSpace.Loading]: {
    isLoading: false,
    isLoadingForm: false,
    loadingFormStatus: LoadingStatus.None
  },
  [StoreNameSpace.Offers]: {
    offers: [],
    favoriteOffers: [],
    offer: null,
    nearbyOffers: [],
    reviews: [],
    city: CITIES.find((city) => city.name === DEFAULT_CITY) as City,
    activeMapPoint: undefined
  },
  ...initialState ?? {},
});

export const makeFakeFavoritesList = ():Favorites[] => {
  const offers = makeFakeOffers(4);

  return prepareFavoritesByCity(offers);
};

export const makeFakeFavorites = (): Favorites => {
  const city = makeFakeCity();
  const offers = makeFakeOffers(3);

  offers.forEach((offer) => {
    offer.city = city;
  });

  return {
    cityName: city.name,
    offers: offers,
  };
};
