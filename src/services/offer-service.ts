import {ActiveMapPoint, City, Offer} from '../types/offer.ts';
import {SortOption} from '../consts.ts';

function getLocationOffers(city: City, offers: Offer[]) {
  return offers.filter((offer) => offer.city.name === city.name);
}

function getLowToHighPriceSortedOffers(offers: Offer[]) {
  return offers.sort((a, b) => a.price - b.price);
}

function getHighToLowOffers(offers: Offer[]) {
  return offers.sort((a, b) => b.price - a.price);
}

function getTopRatedOffers(offers: Offer[]) {
  return offers.sort((a, b) => b.rating - a.rating);
}

function sortOffers(offers: Offer[], sortType: string) {
  const sortingOffers = [...offers];

  switch (sortType) {
    case SortOption.PriceLowToHigh:
      return getLowToHighPriceSortedOffers(sortingOffers);
    case SortOption.PriceHighToLow:
      return getHighToLowOffers(sortingOffers);
    case SortOption.TopRatedFirst:
      return getTopRatedOffers(sortingOffers);
    case SortOption.Popular:
    default:
      return sortingOffers;
  }
}

function getOfferMapPoint(offers: Offer[], offerId: number): ActiveMapPoint {
  return offers.find((offer: Offer) => offer.id === offerId)?.location;
}

export {getLocationOffers, sortOffers, getOfferMapPoint};
