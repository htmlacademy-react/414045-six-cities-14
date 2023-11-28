import {State} from '../../types/state.ts';
import {StoreNameSpace} from '../../consts.ts';

export const isLoading = (state: State) => state[StoreNameSpace.Loading].isLoading;
