import {State} from '../../types/state.ts';
import {StoreNameSpace} from '../../consts.ts';

export const getIsLoading = (state: State) => state[StoreNameSpace.Loading].isLoading;
export const getIsLoadingForm = (state: State) => state[StoreNameSpace.Loading].isLoadingForm;
export const getLoadingFormStatus = (state: State) => state[StoreNameSpace.Loading].loadingFormStatus;
