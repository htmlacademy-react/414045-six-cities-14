import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthorizationStatus, StoreNameSpace} from '../../consts.ts';
import {AuthInfo} from '../../types/user.ts';
import {checkAuthAction, loginAction, logoutAction} from '../api-action.ts';

type authState = {
  authorizationStatus: AuthorizationStatus;
  authInfo: AuthInfo|undefined;
}

const initialState:authState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  authInfo: undefined,
};

export const authSlice = createSlice({
  name: StoreNameSpace.Auth,
  initialState,
  reducers: {
    setAuthorizationStatus: (state, action: PayloadAction<{authorizationStatus: AuthorizationStatus}>) => {
      const {authorizationStatus} = action.payload;
      state.authorizationStatus = authorizationStatus;
    },
    setAuthInfo: (state, action: PayloadAction<{authInfo: AuthInfo|undefined}>) => {
      const {authInfo} = action.payload;
      state.authInfo = authInfo;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
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

export const {setAuthorizationStatus, setAuthInfo} = authSlice.actions;
