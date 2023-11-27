import {createAction} from '@reduxjs/toolkit';
import {ActiveMapPoint, City, Offer} from '../types/offer.ts';
import {AppRoute, AuthorizationStatus} from '../consts.ts';
import {AuthInfo} from '../types/user.ts';
import {Review} from '../types/review.ts';

export const selectCity = createAction<{selectedCity: City}>('location/selectCity');
export const setOffers = createAction<{offers: Offer[]}>('offers/setOffers');
export const setOffer = createAction<{offer: Offer|null}>('offers/setOffer');
export const setNearbyOffers = createAction<{nearbyOffers: Offer[]}>('offers/nearbyOffers');
export const setReviews = createAction<{reviews: Review[]}>('offers/setReviews');
export const setActiveMapPoint = createAction<{activeMapPoint: ActiveMapPoint}>('map/setActivePoint');
export const setLoadingStatus = createAction<{isLoading: boolean}>('loading/setStatus');
export const setAuthorizationStatus = createAction<{authorizationStatus: AuthorizationStatus}>('auth/setAuthorizationStatus');
export const setAuthInfo = createAction<{authInfo: AuthInfo|undefined}>('auth/setAuthInfo');
export const redirectToRoute = createAction<AppRoute>('routing/redirectToRoute');
export const setError = createAction<{error: string|null}>('error/setError');
