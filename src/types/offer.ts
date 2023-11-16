import {User} from './user.ts';
import {CityName as CityName} from '../consts.ts';

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
  id: number;
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
