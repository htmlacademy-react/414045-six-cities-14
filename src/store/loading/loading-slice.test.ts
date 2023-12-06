import {loadingSlice} from './loading-slice.ts';
import {loadOffersAction} from '../api-action.ts';

describe('LoadingSlice', () => {
  it('should return initial state if empty action', () => {
    const action = {type: ''};
    const expectedState = {
      isLoading: false,
    };

    const result = loadingSlice.reducer(expectedState, action);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state if empty action and undefined state', () => {
    const action = {type: ''};
    const expectedState = {
      isLoading: false,
    };

    const result = loadingSlice.reducer(undefined, action);

    expect(result).toEqual(expectedState);
  });

  it('should set "isLoading" equal "true" with "loadOffersAction.pending" action', () => {
    const initialState = {
      isLoading: false,
    };
    const expectedState = {
      isLoading: true,
    };

    const result = loadingSlice.reducer(initialState, loadOffersAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "isLoading" equal "false" with "loadOffersAction.fulfilled" action', () => {
    const initialState = {
      isLoading: true,
    };
    const expectedState = {
      isLoading: false,
    };

    const result = loadingSlice.reducer(initialState, loadOffersAction.fulfilled);

    expect(result).toEqual(expectedState);
  });

  it('should set "isLoading" equal "false" with "loadOffersAction.rejected" action', () => {
    const initialState = {
      isLoading: true,
    };
    const expectedState = {
      isLoading: false,
    };

    const result = loadingSlice.reducer(initialState, loadOffersAction.rejected);

    expect(result).toEqual(expectedState);
  });
});
