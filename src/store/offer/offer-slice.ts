import {createSlice, current, PayloadAction} from '@reduxjs/toolkit';
import {CITIES, DEFAULT_CITY, StoreNameSpace} from '../../consts.ts';
import {ActiveMapPoint, City, Offer, OfferReducerType} from '../../types/offer.ts';
import {Review} from '../../types/review.ts';
import {
  addReviewAction,
  loadFavoriteOffersAction,
  loadNearbyOffersAction,
  loadOfferAction,
  loadOffersAction,
  loadReviewsAction,
  toggleFavoriteOfferAction
} from '../api-action.ts';

const initialState: OfferReducerType = {
  offers: [],
  favoriteOffers: [],
  offer: null,
  nearbyOffers: [],
  reviews: [],
  city: CITIES.find((city) => city.name === DEFAULT_CITY) as City,
  activeMapPoint: undefined
};

export const offerSlice = createSlice({
  name: StoreNameSpace.Offers,
  initialState,
  reducers: {
    setOffers: (state, action: PayloadAction<{ offers: Offer[] }>) => {
      const {offers} = action.payload;
      state.offers = offers;
    },
    setOffer: (state, action: PayloadAction<{ offer: Offer }>) => {
      const {offer} = action.payload;
      state.offer = offer;
    },
    setNearbyOffers: (state, action: PayloadAction<{ nearbyOffers: Offer[] }>) => {
      const {nearbyOffers} = action.payload;
      state.nearbyOffers = nearbyOffers;
    },
    setReviews: (state, action: PayloadAction<{ reviews: Review[] }>) => {
      const {reviews} = action.payload;
      state.reviews = reviews;
    },
    setCity: (state, action: PayloadAction<{ city: City }>) => {
      const {city} = action.payload;
      state.city = city;
    },
    setActiveMapPoint: (state, action: PayloadAction<{ activeMapPoint: ActiveMapPoint }>) => {
      const {activeMapPoint} = action.payload;
      state.activeMapPoint = activeMapPoint;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(loadOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
      })
      .addCase(loadOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
      })
      .addCase(loadReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(loadNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      })
      .addCase(loadFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
      })
      .addCase(toggleFavoriteOfferAction.fulfilled, (state, action) => {
        const updatedOffer = action.payload;
        let favoriteOffers = current(state.favoriteOffers);
        const favoriteOffersIncludeUpdatedOffer = favoriteOffers.find((offer) => offer.id === updatedOffer.id) !== undefined;

        if (updatedOffer.isFavorite && !favoriteOffersIncludeUpdatedOffer) {
          favoriteOffers = [...favoriteOffers, updatedOffer];
        } else {
          favoriteOffers = favoriteOffers.filter((offer) => updatedOffer.id !== offer.id);
        }

        state.favoriteOffers = favoriteOffers;
      })
      .addCase(addReviewAction.fulfilled, (state, action) => {
        const reviews = current(state.reviews);
        state.reviews = [...reviews, action.payload];
      });
  }
});

export const {setOffers, setOffer, setNearbyOffers, setReviews, setCity, setActiveMapPoint} = offerSlice.actions;
