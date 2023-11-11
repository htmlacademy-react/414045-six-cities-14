import {City, Offer} from '../types/offer.ts';

function getLocationOffers(city: City, offers: Offer[]) {
  return offers.filter((offer) => offer.city.name === city.name);
}

export {getLocationOffers};
