export type MapPoint = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type OfferHost = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
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
  host: OfferHost;
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
