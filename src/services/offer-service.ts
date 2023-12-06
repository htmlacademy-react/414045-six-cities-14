import {ActiveMapPoint, City, Favorites as FavoritesType, Offer} from '../types/offer.ts';
import {SortOption} from '../consts.ts';
import {Review} from '../types/review.ts';

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

function sortOfferReviews(reviews: Review[]) {
  return [...reviews].sort((a, b) => new Date(a.date) <= new Date(b.date) ? 1 : -1);
}

function getOfferMapPoint(offers: Offer[], offerId: number): ActiveMapPoint {
  return offers.find((offer: Offer) => offer.id === offerId)?.location;
}

function prepareFavoritesByCity(offers: Offer[]): FavoritesType[] {
  const favoritesByCity: FavoritesType[] = [];

  offers.forEach((offer: Offer) => {
    const favorites = favoritesByCity.find((favoritesFromCity) => favoritesFromCity.cityName === offer.city.name);

    if (typeof favorites === 'undefined') {
      favoritesByCity.push({
        cityName: offer.city.name,
        offers: [offer]
      });
    } else {
      favorites.offers.push(offer);
    }
  });

  return favoritesByCity;
}

export {getLocationOffers, sortOffers, getOfferMapPoint, sortOfferReviews, prepareFavoritesByCity};
