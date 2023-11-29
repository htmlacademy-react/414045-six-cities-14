import {State} from '../../types/state.ts';
import {StoreNameSpace} from '../../consts.ts';

export const getAuthorizationStatus = (state: State) => state[StoreNameSpace.Auth].authorizationStatus;
export const getAuthInfo = (state: State) => state[StoreNameSpace.Auth].authInfo;
