import {createAction} from '@reduxjs/toolkit';
import {ActiveMapPoint, City, Offer} from '../types/offer.ts';

export const selectCity = createAction<{selectedCity: City}>('location/selectCity');
export const setOffers = createAction<{offers: Offer[]}>('location/setOffers');
export const setActiveMapPoint = createAction<{activeMapPoint: ActiveMapPoint}>('map/setActivePoint');
export const setLoadingStatus = createAction<{isLoading: boolean}>('loading/setStatus');
