import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.ts';
import {AxiosInstance} from 'axios';
import {APIRoute} from '../consts.ts';
import {setLoadingStatus, setOffers} from './action.ts';
import {Offer} from '../types/offer.ts';

export const loadOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/load',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setLoadingStatus({isLoading: true}));
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(setLoadingStatus({isLoading: false}));
    dispatch(setOffers({offers: data}));
  }
);

