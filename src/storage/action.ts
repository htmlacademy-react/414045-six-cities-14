import {createAction} from '@reduxjs/toolkit';
import {City, Offer} from '../types/offer.ts';

export const selectCity = createAction<{selectedCity: City}>('location/selectCity');
export const setOffers = createAction<{offers: Offer[]}>('location/setOffers');
