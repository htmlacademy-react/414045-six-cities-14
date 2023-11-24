import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.ts';
import {AxiosInstance} from 'axios';
import {APIRoute, AppRoute, AuthorizationStatus, SHOW_TIME_ERROR} from '../consts.ts';
import {redirectToRoute, setAuthorizationStatus, setError, setLoadingStatus, setOffers} from './action.ts';
import {Offer} from '../types/offer.ts';
import {AuthData, AuthInfo} from '../types/user.ts';
import {deleteToken, saveToken} from '../services/token-service.ts';
import {store} from './index.ts';

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

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'auth/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(setAuthorizationStatus({authorizationStatus: AuthorizationStatus.Auth}));
    } catch (e) {
      dispatch(setAuthorizationStatus({authorizationStatus: AuthorizationStatus.NoAuth}));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'auth/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<AuthInfo>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(setAuthorizationStatus({authorizationStatus: AuthorizationStatus.Auth}));
    dispatch(redirectToRoute(AppRoute.Main));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'auth/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    deleteToken();
    dispatch(setAuthorizationStatus({authorizationStatus: AuthorizationStatus.NoAuth}));
    dispatch(redirectToRoute(AppRoute.Login));
  }
);

export const clearError = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
}>(
  'error/clearError',
  () => {
    setTimeout(() => store.dispatch(setError({error: null})), SHOW_TIME_ERROR);
  }
);
