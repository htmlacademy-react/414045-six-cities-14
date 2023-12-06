import {combineReducers} from '@reduxjs/toolkit';
import {StoreNameSpace} from '../consts.ts';
import {authSlice} from './auth/auth-slice.ts';
import {loadingSlice} from './loading/loading-slice.ts';
import {offerSlice} from './offer/offer-slice.ts';

export const reducer = combineReducers({
  [StoreNameSpace.Auth]: authSlice.reducer,
  [StoreNameSpace.Loading]: loadingSlice.reducer,
  [StoreNameSpace.Offers]: offerSlice.reducer
});
