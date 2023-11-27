import {createReducer} from '@reduxjs/toolkit';
import {
  selectCity,
  setActiveMapPoint,
  setAuthInfo,
  setAuthorizationStatus, setError,
  setLoadingStatus,
  setOffers
} from './action.ts';
import {AuthorizationStatus, CITIES, DEFAULT_CITY} from '../consts.ts';
import {ActiveMapPoint, City, Offer} from '../types/offer.ts';
import {AuthInfo} from '../types/user.ts';

type State = {
  city: City;
  offers: Offer[];
  activeMapPoint: ActiveMapPoint;
  isLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  authInfo: AuthInfo|undefined;
  error: string|null;
}

const initialState: State = {
  city: CITIES.find((city) => city.name === DEFAULT_CITY) as City,
  offers: [],
  activeMapPoint: undefined,
  isLoading: true,
  authorizationStatus: AuthorizationStatus.Unknown,
  authInfo: undefined,
  error: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      const {selectedCity} = action.payload;
      state.city = selectedCity;
    })
    .addCase(setOffers, (state, action) => {
      const {offers} = action.payload;
      state.offers = offers;
    })
    .addCase(setActiveMapPoint, (state, action) => {
      const {activeMapPoint} = action.payload;
      state.activeMapPoint = activeMapPoint;
    })
    .addCase(setLoadingStatus, (state, action) => {
      const {isLoading} = action.payload;
      state.isLoading = isLoading;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      const {authorizationStatus} = action.payload;
      state.authorizationStatus = authorizationStatus;
    })
    .addCase(setAuthInfo, (state, action) => {
      const {authInfo} = action.payload;
      state.authInfo = authInfo;
    })
    .addCase(setError, (state, action) => {
      const {error} = action.payload;
      state.error = error;
    });
});
