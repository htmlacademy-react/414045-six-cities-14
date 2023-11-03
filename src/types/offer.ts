import {User} from './user.ts';

export type MapPoint = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  location: MapPoint;
  name: string;
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
