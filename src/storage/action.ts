import {createAction} from '@reduxjs/toolkit';
import {ActiveMapPoint, City, Offer} from '../types/offer.ts';
import {AppRoute, AuthorizationStatus} from '../consts.ts';
import {AuthInfo} from '../types/user.ts';

export const selectCity = createAction<{selectedCity: City}>('location/selectCity');
export const setOffers = createAction<{offers: Offer[]}>('location/setOffers');
export const setActiveMapPoint = createAction<{activeMapPoint: ActiveMapPoint}>('map/setActivePoint');
export const setLoadingStatus = createAction<{isLoading: boolean}>('loading/setStatus');
export const setAuthorizationStatus = createAction<{authorizationStatus: AuthorizationStatus}>('auth/setAuthorizationStatus');
export const setAuthInfo = createAction<{authInfo: AuthInfo|undefined}>('auth/setAuthInfo');
export const redirectToRoute = createAction<AppRoute>('routing/redirectToRoute');
export const setError = createAction<{error: string|null}>('error/setError');
