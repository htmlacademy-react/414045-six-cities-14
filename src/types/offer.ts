import {User} from './user.ts';
import {CityName} from '../consts.ts';
import {Review} from './review.ts';

export type MapPoint = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type ActiveMapPoint = MapPoint|undefined;

export type City = {
  location: MapPoint;
  name: CityName;
}

export type Offer = {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: User;
  id: OfferId;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: MapPoint;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

export type OfferId = string;

export type FavoriteToggleData = {
  offerId: OfferId;
  status: number;
}

export type Favorites = {
  cityName: CityName;
  offers: Offer[];
}

export type OfferReducerType = {
  offers: Offer[];
  favoriteOffers: Offer[];
  nearbyOffers: Offer[];
  offer: Offer | null;
  reviews: Review[];
  city: City;
  activeMapPoint: ActiveMapPoint;
}
