import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreNameSpace} from '../../consts.ts';
import {Error} from '../../types/error.ts';

type ErrorStoreType = {
  error: Error;
}

const initialState: ErrorStoreType = {
  error: null
};

export const errorSlice = createSlice({
  name: StoreNameSpace.Error,
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<{ error: Error }>) => {
      const {error} = action.payload;
      state.error = error;
    },
    clearError: (state) => {
      state.error = null;
    }
  }
});

export const {setError, clearError} = errorSlice.actions;
