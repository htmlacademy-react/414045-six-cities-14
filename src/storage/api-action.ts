import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.ts';
import {AxiosInstance} from 'axios';
import {APIRoute, AppRoute, AuthorizationStatus, SHOW_TIME_ERROR} from '../consts.ts';
import {
  redirectToRoute, setAuthInfo,
  setAuthorizationStatus,
  setError,
  setLoadingStatus, setNearbyOffers,
  setOffer,
  setOffers,
  setReviews
} from './action.ts';
import {Offer, OfferId} from '../types/offer.ts';
import {AuthData, AuthInfo} from '../types/user.ts';
import {deleteToken, saveToken} from '../services/token-service.ts';
import {store} from './index.ts';
import {NewReviewData, Review} from '../types/review.ts';

export const loadOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/loadOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setLoadingStatus({isLoading: true}));
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(setLoadingStatus({isLoading: false}));
    dispatch(setOffers({offers: data}));
  }
);

export const loadOfferAction = createAsyncThunk<void, OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/loadOffer',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);
    dispatch(setOffer({offer: data}));
  }
);

export const loadReviewsAction = createAsyncThunk<void, OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/loadReviews',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<Review[]>(`${APIRoute.Comments}/${offerId}`);
    dispatch(setReviews({reviews: data}));
  }
);

export const loadNearbyOffersAction = createAsyncThunk<void, OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/loadNearbyOffers',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(`${APIRoute.Offers}/${offerId}/nearby`);
    dispatch(setNearbyOffers({nearbyOffers: data}));
  }
);

export const addReviewAction = createAsyncThunk<void, NewReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/addReview',
  async (review: NewReviewData, {dispatch, extra: api}) => {
    const {data} = await api.post<Review[]>(`${APIRoute.Comments}/${review.offerId}`, {comment: review.comment, rating: review.rating});
    dispatch(setReviews({reviews: data}));
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
    const {data} = await api.post<AuthInfo>(APIRoute.Login, {email, password});

    saveToken(data.token);

    dispatch(setAuthInfo({authInfo: data}));
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
