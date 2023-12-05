import {AuthorizationStatus} from '../../consts.ts';
import {authSlice} from './auth-slice.ts';
import {checkAuthAction, loginAction, logoutAction} from '../api-action.ts';
import {makeFakeAuthInfo} from '../../mocks/mocks.ts';
import {AuthData} from '../../types/user.ts';

describe('AuthSlice', () => {
  const authInfo = makeFakeAuthInfo();

  it('should return initial state if empty action', () => {
    const action = {type: ''};
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Auth,
      authInfo: undefined,
    };

    const result = authSlice.reducer(expectedState, action);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state if empty action and undefined state', () => {
    const action = {type: ''};
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Unknown,
      authInfo: undefined,
    };

    const result = authSlice.reducer(undefined, action);

    expect(result).toEqual(expectedState);
  });

  it('should set "Auth" if "loginAction.fulfilled" action', () => {
    const initialState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      authInfo: undefined,
    };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Auth,
      authInfo: authInfo,
    };

    const result = authSlice.reducer(initialState, loginAction.fulfilled(authInfo, '', {} as AuthData));

    expect(result).toEqual(expectedState);
  });

  it('should set "NoAuth" if "logoutAction.fulfilled" action', () => {
    const initialState = {
      authorizationStatus: AuthorizationStatus.Auth,
      authInfo: authInfo,
    };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      authInfo: undefined,
    };

    const result = authSlice.reducer(initialState, logoutAction.fulfilled);

    expect(result).toEqual(expectedState);
  });

  it('should set "Auth" and "AuthInfo" if "heckAuthAction.fulfilled"', () => {
    const initialState = {
      authorizationStatus: AuthorizationStatus.Unknown,
      authInfo: undefined,
    };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Auth,
      authInfo: authInfo,
    };

    const result = authSlice.reducer(initialState, checkAuthAction.fulfilled(authInfo, '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set "NoAuth" and "AuthInfo" equal undefined if "heckAuthAction.rejected"', () => {
    const initialState = {
      authorizationStatus: AuthorizationStatus.Unknown,
      authInfo: authInfo,
    };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      authInfo: undefined,
    };

    const result = authSlice.reducer(initialState, checkAuthAction.rejected);

    expect(result).toEqual(expectedState);
  });
});
