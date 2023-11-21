import {createReducer} from '@reduxjs/toolkit';
import {selectCity, setActiveMapPoint, setLoadingStatus, setOffers} from './action.ts';
import {CITIES, DEFAULT_CITY} from '../consts.ts';
import {ActiveMapPoint, City, Offer} from '../types/offer.ts';

type State = {
  city: City;
  offers: Offer[];
  activeMapPoint: ActiveMapPoint;
  isLoading: boolean;
}

const initialState: State = {
  city: CITIES.find((city) => city.name === DEFAULT_CITY) as City,
  offers: [],
  activeMapPoint: undefined,
  isLoading: true,
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
    });
});
