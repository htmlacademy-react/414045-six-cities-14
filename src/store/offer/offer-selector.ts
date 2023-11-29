import {State} from '../../types/state.ts';
import {StoreNameSpace} from '../../consts.ts';

export const getActiveMapPoint = (state: State) => state[StoreNameSpace.Offers].activeMapPoint;
export const getOffers = (state: State) => state[StoreNameSpace.Offers].offers;
export const getNearbyOffers = (state: State) => state[StoreNameSpace.Offers].nearbyOffers;
export const getOffer = (state: State) => state[StoreNameSpace.Offers].offer;
export const getCity = (state: State) => state[StoreNameSpace.Offers].city;
export const getReviews = (state: State) => state[StoreNameSpace.Offers].reviews;
