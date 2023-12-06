import {createApi} from '../api.ts';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {APIRoute} from '../consts.ts';
import {
  addReviewAction,
  checkAuthAction, loadFavoriteOffersAction, loadNearbyOffersAction,
  loadOfferAction,
  loadOffersAction,
  loadReviewsAction,
  loginAction,
  logoutAction, toggleFavoriteOfferAction
} from './api-action.ts';
import {extractActionsTypes} from '../utils/utils.ts';
import {Action} from '@reduxjs/toolkit';
import {AppThunkDispatch, State} from '../types/state.ts';
import {redirectToRoute} from './actions.ts';
import {makeFakeOffer, makeFakeOffers, makeFakeReview, makeFakeReviews} from '../mocks/mocks.ts';


describe('ApiAction', () => {
  const axios = createApi();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);

  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({});
  });

  describe('checkAuth', () => {
    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.fulfilled" with response code 200', async () => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(200);

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.fulfilled.type,
      ]);
    });

    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.reject" with response code 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(400);

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.rejected.type,
      ]);
    });
  });

  describe('login', () => {
    it('should dispatch "loginAction.pending", "redirectToRoute", "loginAction.fulfilled" when server response code 200', async () => {
      const authData = {email: 'test@test.ru', password: 'qwerty'};
      const response = {token: 'token'};

      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, response);

      await store.dispatch(loginAction(authData));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loginAction.pending.type,
        redirectToRoute.type,
        loginAction.fulfilled.type
      ]);
    });
  });

  describe('logout', () => {
    it('should dispatch "logoutAction.pending", "redirectToRoute", "logoutAction.fulfilled" when server response 204', async () => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);

      await store.dispatch(logoutAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        logoutAction.pending.type,
        redirectToRoute.type,
        logoutAction.fulfilled.type,
      ]);
    });
  });

  describe('load offers', () => {
    it('should dispatch "loadOffersAction.pending", "loadOffersAction.fulfilled" when response code 200', async () => {
      const mockOffers = makeFakeOffers(3);

      mockAxiosAdapter.onGet(APIRoute.Offers).reply(200, mockOffers);

      await store.dispatch(loadOffersAction());
      const actions = store.getActions();
      const extractedAction = extractActionsTypes(actions);
      const responseData = actions.at(1) as ReturnType<typeof loadOffersAction.fulfilled>;

      expect(extractedAction).toEqual([
        loadOffersAction.pending.type,
        loadOffersAction.fulfilled.type,
      ]);

      expect(responseData.payload).toEqual(mockOffers);
    });

    it('should dispatch "loadOffersAction.pending", "loadOffersAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(400, []);

      await store.dispatch(loadOffersAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loadOffersAction.pending.type,
        loadOffersAction.rejected.type,
      ]);
    });
  });

  describe('load offer', () => {
    it('should dispatch "loadOfferAction.pending", "loadOfferAction.fulfilled" when response code 200', async () => {
      const mockOffer = makeFakeOffer();

      mockAxiosAdapter.onGet(`${APIRoute.Offers}/${mockOffer.id}`).reply(200, mockOffer);

      await store.dispatch(loadOfferAction(mockOffer.id));
      const actions = store.getActions();
      const extractedAction = extractActionsTypes(actions);
      const responseData = actions.at(1) as ReturnType<typeof loadOfferAction.fulfilled>;

      expect(extractedAction).toEqual([
        loadOfferAction.pending.type,
        loadOfferAction.fulfilled.type,
      ]);

      expect(responseData.payload).toEqual(mockOffer);
    });

    it('should dispatch "loadOfferAction.pending", "loadOfferAction.rejected" when server response 400', async () => {
      const mockOfferId = 'test';
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/${mockOfferId}`).reply(400, []);

      await store.dispatch(loadOfferAction(mockOfferId));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loadOfferAction.pending.type,
        loadOfferAction.rejected.type,
      ]);
    });
  });

  describe('load reviews', () => {
    it('should dispatch "loadReviewsAction.pending", "loadReviewsAction.fulfilled" when response code 200', async () => {
      const mockOfferId = 'test';
      const mockReviews = makeFakeReviews(3);

      mockAxiosAdapter.onGet(`${APIRoute.Comments}/${mockOfferId}`).reply(200, mockReviews);

      await store.dispatch(loadReviewsAction(mockOfferId));
      const actions = store.getActions();
      const extractedAction = extractActionsTypes(actions);
      const responseData = actions.at(1) as ReturnType<typeof loadReviewsAction.fulfilled>;

      expect(extractedAction).toEqual([
        loadReviewsAction.pending.type,
        loadReviewsAction.fulfilled.type,
      ]);

      expect(responseData.payload).toEqual(mockReviews);
    });

    it('should dispatch "loadReviewsAction.pending", "loadReviewsAction.rejected" when server response 400', async () => {
      const mockOfferId = 'test';
      mockAxiosAdapter.onGet(`${APIRoute.Comments}/${mockOfferId}`).reply(400, []);

      await store.dispatch(loadReviewsAction(mockOfferId));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loadReviewsAction.pending.type,
        loadReviewsAction.rejected.type,
      ]);
    });
  });

  describe('load nearby offers', () => {
    it('should dispatch "loadNearbyOffersAction.pending", "loadNearbyOffersAction.fulfilled" when response code 200', async () => {
      const mockOfferId = 'test';
      const mockOffers = makeFakeOffers(3);

      mockAxiosAdapter.onGet(`${APIRoute.Offers}/${mockOfferId}/nearby`).reply(200, mockOffers);

      await store.dispatch(loadNearbyOffersAction(mockOfferId));
      const actions = store.getActions();
      const extractedAction = extractActionsTypes(actions);
      const responseData = actions.at(1) as ReturnType<typeof loadNearbyOffersAction.fulfilled>;

      expect(extractedAction).toEqual([
        loadNearbyOffersAction.pending.type,
        loadNearbyOffersAction.fulfilled.type,
      ]);

      expect(responseData.payload).toEqual(mockOffers);
    });

    it('should dispatch "loadNearbyOffersAction.pending", "loadNearbyOffersAction.rejected" when server response 400', async () => {
      const mockOfferId = 'test';
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/${mockOfferId}/nearby`).reply(400, []);

      await store.dispatch(loadNearbyOffersAction(mockOfferId));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loadNearbyOffersAction.pending.type,
        loadNearbyOffersAction.rejected.type,
      ]);
    });
  });

  describe('load favorite offers', () => {
    it('should dispatch "loadFavoriteOffersAction.pending", "loadFavoriteOffersAction.fulfilled" when response code 200', async () => {
      const mockOffers = makeFakeOffers(3);

      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(200, mockOffers);

      await store.dispatch(loadFavoriteOffersAction());
      const actions = store.getActions();
      const extractedAction = extractActionsTypes(actions);
      const responseData = actions.at(1) as ReturnType<typeof loadFavoriteOffersAction.fulfilled>;

      expect(extractedAction).toEqual([
        loadFavoriteOffersAction.pending.type,
        loadFavoriteOffersAction.fulfilled.type,
      ]);

      expect(responseData.payload).toEqual(mockOffers);
    });

    it('should dispatch "loadFavoriteOffersAction.pending", "loadFavoriteOffersAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(400, []);

      await store.dispatch(loadFavoriteOffersAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loadFavoriteOffersAction.pending.type,
        loadFavoriteOffersAction.rejected.type,
      ]);
    });
  });

  describe('toggle favorite offer', () => {
    it('should dispatch "toggleFavoriteOfferAction.pending", "toggleFavoriteOfferAction.fulfilled" when response code 200', async () => {
      const mockOffer = makeFakeOffer();

      mockAxiosAdapter.onPost(`${APIRoute.Favorite}/${mockOffer.id}/${Number(!mockOffer.isFavorite)}`).reply(200, mockOffer);

      await store.dispatch(toggleFavoriteOfferAction({offerId: mockOffer.id, status: Number(!mockOffer.isFavorite)}));
      const actions = store.getActions();
      const extractedAction = extractActionsTypes(actions);

      expect(extractedAction).toEqual([
        toggleFavoriteOfferAction.pending.type,
        toggleFavoriteOfferAction.fulfilled.type,
      ]);
    });

    it('should toggle isFavorite when response code 200', async () => {
      const mockOffer = makeFakeOffer();

      mockAxiosAdapter.onPost(`${APIRoute.Favorite}/${mockOffer.id}/${Number(!mockOffer.isFavorite)}`).reply(200, mockOffer);

      await store.dispatch(toggleFavoriteOfferAction({offerId: mockOffer.id, status: Number(!mockOffer.isFavorite)}));
      const actions = store.getActions();
      const responseData = actions.at(1) as ReturnType<typeof toggleFavoriteOfferAction.fulfilled>;

      expect(responseData.payload).toEqual(mockOffer);
    });

    it('should dispatch "toggleFavoriteOfferAction.pending", "toggleFavoriteOfferAction.rejected" when server response 400', async () => {
      const mockOfferId = 'test';
      const status = 1;

      mockAxiosAdapter.onPost(`${APIRoute.Favorite}/${mockOfferId}/${status}`).reply(400, []);

      await store.dispatch(toggleFavoriteOfferAction({offerId: mockOfferId, status: status}));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        toggleFavoriteOfferAction.pending.type,
        toggleFavoriteOfferAction.rejected.type,
      ]);
    });
  });

  describe('add review', () => {
    it('should dispatch "addReviewAction.pending", "addReviewAction.fulfilled" and response include added review when response code 200', async () => {
      const mockOfferId = 'test';
      const mockReview = makeFakeReview();
      const mockReviews = makeFakeReviews(3);
      const expectedReviews = [...mockReviews, mockReview];

      mockAxiosAdapter.onPost(`${APIRoute.Comments}/${mockOfferId}`).reply(200, expectedReviews);

      await store.dispatch(addReviewAction({offerId: mockOfferId, rating: mockReview.rating, comment: mockReview.comment}));
      const actions = store.getActions();
      const extractedAction = extractActionsTypes(actions);
      const responseData = actions.at(1) as ReturnType<typeof toggleFavoriteOfferAction.fulfilled>;

      expect(extractedAction).toEqual([
        addReviewAction.pending.type,
        addReviewAction.fulfilled.type,
      ]);

      expect(responseData.payload).toEqual(expectedReviews);
    });

    it('should dispatch "addReviewAction.pending", "addReviewAction.rejected" when server response 400', async () => {
      const mockOfferId = 'test';
      const mockReview = makeFakeReview();

      mockAxiosAdapter.onPost(`${APIRoute.Comments}/${mockOfferId}`).reply(400, []);

      await store.dispatch(addReviewAction({offerId: mockOfferId, rating: mockReview.rating, comment: mockReview.comment}));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        addReviewAction.pending.type,
        addReviewAction.rejected.type,
      ]);
    });
  });
});
