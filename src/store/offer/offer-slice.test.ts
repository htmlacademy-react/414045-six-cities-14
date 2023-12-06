import {offerSlice} from './offer-slice.ts';
import {CITIES, DEFAULT_CITY} from '../../consts.ts';
import {City, FavoriteToggleData} from '../../types/offer.ts';
import {makeFakeOffer, makeFakeOffers, makeFakeReview, makeFakeReviews} from '../../mocks/mocks.ts';
import {
  addReviewAction,
  loadFavoriteOffersAction,
  loadNearbyOffersAction,
  loadOfferAction,
  loadOffersAction,
  loadReviewsAction, toggleFavoriteOfferAction
} from '../api-action.ts';
import {NewReviewData} from '../../types/review.ts';

describe('OfferSlice', () => {
  const defaultCity = CITIES.find((city) => city.name === DEFAULT_CITY) as City;
  const defaultOfferSliceState = {
    offers: [],
    favoriteOffers: [],
    offer: null,
    nearbyOffers: [],
    reviews: [],
    city: defaultCity,
    activeMapPoint: undefined
  };

  it('should return initial state if empty action', () => {
    const action = {type: ''};
    const expectedState = defaultOfferSliceState;
    const result = offerSlice.reducer(expectedState, action);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state if empty action and undefined state', () => {
    const action = {type: ''};
    const expectedState = defaultOfferSliceState;

    const result = offerSlice.reducer(undefined, action);

    expect(result).toEqual(expectedState);
  });

  it('should set offers with "loadOffersAction.fulfilled" action', () => {
    const offers = makeFakeOffers(3);
    const expectedState = {
      offers: offers,
      favoriteOffers: [],
      offer: null,
      nearbyOffers: [],
      reviews: [],
      city: defaultCity,
      activeMapPoint: undefined
    };

    const result = offerSlice.reducer(undefined, loadOffersAction.fulfilled(offers, '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set offer with "loadOfferAction.fulfilled" action', () => {
    const offer = makeFakeOffer();
    const expectedState = {
      offers: [],
      favoriteOffers: [],
      offer: offer,
      nearbyOffers: [],
      reviews: [],
      city: defaultCity,
      activeMapPoint: undefined
    };

    const result = offerSlice.reducer(undefined, loadOfferAction.fulfilled(offer, '', offer.id));

    expect(result).toEqual(expectedState);
  });

  it('should set Reviews with "loadReviewsAction.fulfilled" action', () => {
    const offer = makeFakeOffer();
    const reviews = makeFakeReviews(3);
    const expectedState = {
      offers: [],
      favoriteOffers: [],
      offer: null,
      nearbyOffers: [],
      reviews: reviews,
      city: defaultCity,
      activeMapPoint: undefined
    };

    const result = offerSlice.reducer(undefined, loadReviewsAction.fulfilled(reviews, '', offer.id));

    expect(result).toEqual(expectedState);
  });

  it('should set "NearbyOffers" with "loadNearbyOffersAction.fulfilled" action', () => {
    const offer = makeFakeOffer();
    const nearbyOffers = makeFakeOffers(3);
    const expectedState = {
      offers: [],
      favoriteOffers: [],
      offer: null,
      nearbyOffers: nearbyOffers,
      reviews: [],
      city: defaultCity,
      activeMapPoint: undefined
    };

    const result = offerSlice.reducer(undefined, loadNearbyOffersAction.fulfilled(nearbyOffers, '', offer.id));

    expect(result).toEqual(expectedState);
  });

  it('should set "FavoriteOffers" with "loadFavoriteOffersAction.fulfilled" action', () => {
    const favoriteOffers = makeFakeOffers(3);
    const expectedState = {
      offers: [],
      favoriteOffers: favoriteOffers,
      offer: null,
      nearbyOffers: [],
      reviews: [],
      city: defaultCity,
      activeMapPoint: undefined
    };

    const result = offerSlice.reducer(undefined, loadFavoriteOffersAction.fulfilled(favoriteOffers, '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should delete offer from favorite with "toggleFavoriteOfferAction.fulfilled" action', () => {
    const offer = makeFakeOffer();

    offer.isFavorite = true;

    const initialState = {
      offers: [],
      favoriteOffers: [offer],
      offer: null,
      nearbyOffers: [],
      reviews: [],
      city: defaultCity,
      activeMapPoint: undefined
    };

    offer.isFavorite = false;

    const expectedState = {
      offers: [],
      favoriteOffers: [],
      offer: null,
      nearbyOffers: [],
      reviews: [],
      city: defaultCity,
      activeMapPoint: undefined
    };

    const result = offerSlice.reducer(initialState, toggleFavoriteOfferAction.fulfilled(offer, '', {} as FavoriteToggleData));

    expect(result).toEqual(expectedState);
  });

  it('should add offer to favorite with "toggleFavoriteOfferAction.fulfilled" action', () => {
    const offer = makeFakeOffer();

    offer.isFavorite = false;

    const initialState = {
      offers: [],
      favoriteOffers: [],
      offer: null,
      nearbyOffers: [],
      reviews: [],
      city: defaultCity,
      activeMapPoint: undefined
    };

    offer.isFavorite = true;

    const expectedState = {
      offers: [],
      favoriteOffers: [offer],
      offer: null,
      nearbyOffers: [],
      reviews: [],
      city: defaultCity,
      activeMapPoint: undefined
    };

    const result = offerSlice.reducer(initialState, toggleFavoriteOfferAction.fulfilled(offer, '', {} as FavoriteToggleData));

    expect(result).toEqual(expectedState);
  });

  it('should add Review with "addReviewAction.fulfilled" action', () => {
    const review = makeFakeReview();
    const expectedState = {
      offers: [],
      favoriteOffers: [],
      offer: null,
      nearbyOffers: [],
      reviews: [review],
      city: defaultCity,
      activeMapPoint: undefined
    };

    const result = offerSlice.reducer(undefined, addReviewAction.fulfilled([review], '', {} as NewReviewData));

    expect(result).toEqual(expectedState);
  });
});
