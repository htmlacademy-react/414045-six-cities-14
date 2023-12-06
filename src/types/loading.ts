import {LoadingStatus} from '../consts.ts';

export type LoadingStateType = {
  isLoading: boolean;
  isLoadingForm: boolean;
  loadingFormStatus: LoadingStatus;
}
