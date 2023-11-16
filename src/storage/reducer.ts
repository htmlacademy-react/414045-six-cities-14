import {offers as defaultOffers} from '../mocks/offers.ts';
import {createReducer} from '@reduxjs/toolkit';
import {selectCity, setActiveMapPoint, setOffers} from './action.ts';
import {CITIES, DEFAULT_CITY} from '../consts.ts';
import {ActiveMapPoint, City, Offer} from '../types/offer.ts';

type State = {
  city: City;
  offers: Offer[];
  activeMapPoint: ActiveMapPoint;
}

const initialState: State = {
  city: CITIES.find((city) => city.name === DEFAULT_CITY) as City,
  offers: defaultOffers,
  activeMapPoint: undefined,
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
    });
});
