import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LoadingStatus, StoreNameSpace} from '../../consts.ts';
import {addReviewAction, loadOfferAction, loadOffersAction} from '../api-action.ts';

type LoadingStateType = {
    isLoading: boolean;
    isLoadingForm: boolean;
    loadingFormStatus: LoadingStatus;
}

const initialState: LoadingStateType = {
  isLoading: false,
  isLoadingForm: false,
  loadingFormStatus: LoadingStatus.None
};

export const loadingSlice = createSlice({
  name: StoreNameSpace.Loading,
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      const {isLoading} = action.payload;
      state.isLoading = isLoading;
    },
    setIsLoadingForm: (state, action: PayloadAction<{ isLoadingForm: boolean }>) => {
      const {isLoadingForm} = action.payload;
      state.isLoadingForm = isLoadingForm;
    },
    setLoadingFormStatus: (state, action: PayloadAction<{ loadingFormStatus: LoadingStatus }>) => {
      const {loadingFormStatus} = action.payload;
      state.loadingFormStatus = loadingFormStatus;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loadOffersAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadOffersAction.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(loadOffersAction.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(loadOfferAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadOfferAction.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addReviewAction.pending, (state) => {
        state.isLoadingForm = true;
      })
      .addCase(addReviewAction.fulfilled, (state) => {
        state.isLoadingForm = false;
        state.loadingFormStatus = LoadingStatus.Success;
      })
      .addCase(addReviewAction.rejected, (state) => {
        state.isLoadingForm = false;
        state.loadingFormStatus = LoadingStatus.Fail;
      });
  }
});

export const {setIsLoading, setIsLoadingForm, setLoadingFormStatus} = loadingSlice.actions;
