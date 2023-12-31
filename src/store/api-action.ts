import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.ts';
import {AxiosInstance} from 'axios';
import {APIRoute, AppRoute} from '../consts.ts';
import {FavoriteToggleData, Offer, OfferId} from '../types/offer.ts';
import {AuthData, AuthInfo} from '../types/user.ts';
import {deleteToken, saveToken} from '../services/token-service.ts';
import {NewReviewData, Review} from '../types/review.ts';
import {redirectToRoute} from './actions.ts';

export const loadOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/loadOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);

    return data;
  }
);

export const loadOfferAction = createAsyncThunk<Offer, OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/loadOffer',
  async (offerId, {extra: api}) => {

    const {data} = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);

    return data;
  }
);

export const loadReviewsAction = createAsyncThunk<Review[], OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/loadReviews',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Review[]>(`${APIRoute.Comments}/${offerId}`);

    return data;
  }
);

export const loadNearbyOffersAction = createAsyncThunk<Offer[], OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/loadNearbyOffers',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Offer[]>(`${APIRoute.Offers}/${offerId}/nearby`);

    return data;
  }
);

export const loadFavoriteOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/favoriteOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Favorite);

    return data;
  }
);

export const toggleFavoriteOfferAction = createAsyncThunk<Offer, FavoriteToggleData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/addFavoriteOffer',
  async ({offerId, status}, {extra: api}) => {
    const {data} = await api.post<Offer>(`${APIRoute.Favorite}/${offerId}/${status}`);

    return data;
  }
);

export const addReviewAction = createAsyncThunk<Review, NewReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/addReview',
  async (review: NewReviewData, {extra: api}) => {
    const {data} = await api.post<Review>(`${APIRoute.Comments}/${review.offerId}`, {comment: review.comment, rating: review.rating});

    return data;
  }
);

export const checkAuthAction = createAsyncThunk<AuthInfo, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'auth/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<AuthInfo>(APIRoute.Login);

    return data;
  }
);

export const loginAction = createAsyncThunk<AuthInfo, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'auth/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<AuthInfo>(APIRoute.Login, {email, password});

    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Main));

    return data;
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
    dispatch(redirectToRoute(AppRoute.Login));
  }
);

export const loadMainPageDataAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
}>(
  'load/mainPageDataPending',
  async (_arg, {dispatch}) => {
    dispatch(loadOffersAction());

    const {payload} = await dispatch(checkAuthAction());

    if (payload) {
      dispatch(loadFavoriteOffersAction());
    }
  }
);
