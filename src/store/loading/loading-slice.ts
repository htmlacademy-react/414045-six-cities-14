import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreNameSpace} from '../../consts.ts';
import {loadOffersAction} from '../api-action.ts';

type LoadingStateType = {
  isLoading: boolean;
}

const initialState: LoadingStateType = {
  isLoading: false
};

export const loadingSlice = createSlice({
  name: StoreNameSpace.Loading,
  initialState,
  reducers: {
    setLoadingStatus: (state, action: PayloadAction<{isLoading: boolean}>) => {
      const {isLoading} = action.payload;
      state.isLoading = isLoading;
    }
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
      });
  }
});

export const {setLoadingStatus} = loadingSlice.actions;
