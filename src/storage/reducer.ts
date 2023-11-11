import {offers as defaultOffers} from '../mocks/offers.ts';
import {createReducer} from '@reduxjs/toolkit';
import {selectCity, setOffers} from './action.ts';
import {CITIES, DEFAULT_CITY} from '../consts.ts';

const initialState = {
  city: CITIES.find((city) => city.name === DEFAULT_CITY),
  offers: defaultOffers
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
    });
});
