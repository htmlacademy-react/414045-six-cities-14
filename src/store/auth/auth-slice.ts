import {createSlice} from '@reduxjs/toolkit';
import {AuthorizationStatus, StoreNameSpace} from '../../consts.ts';
import {AuthState} from '../../types/user.ts';
import {checkAuthAction, loginAction, logoutAction} from '../api-action.ts';

const initialState:AuthState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  authInfo: undefined,
};

export const authSlice = createSlice({
  name: StoreNameSpace.Auth,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.authInfo = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.authInfo = undefined;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.authInfo = action.payload;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.authInfo = undefined;
      });
  }
});
