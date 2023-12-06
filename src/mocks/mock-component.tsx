import {createMemoryHistory, MemoryHistory} from 'history';
import HistoryRouter from '../history-router/history-router.tsx';
import {HelmetProvider} from 'react-helmet-async';
import MockAdapter from 'axios-mock-adapter';
import {AppThunkDispatch, State} from '../types/state.ts';
import {createApi} from '../api.ts';
import thunk from 'redux-thunk';
import {configureMockStore, MockStore} from '@jedmao/redux-mock-store';
import {Action} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

export const withRouter = (component: JSX.Element, history?: MemoryHistory) => {
  const memoryHistory = history ?? createMemoryHistory();

  return (
    <HistoryRouter history={memoryHistory}>
      <HelmetProvider>
        {component}
      </HelmetProvider>
    </HistoryRouter>
  );
};

type ComponentWithStore = {
  withStoreComponent: JSX.Element;
  mockStore: MockStore;
  mockAxiosAdapter: MockAdapter;
}

export const withStore = (component: JSX.Element, initialState: Partial<State> = {}): ComponentWithStore => {
  const axios = createApi();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  const mockStore = mockStoreCreator(initialState);

  return {
    withStoreComponent: <Provider store={mockStore}>{component}</Provider>,
    mockStore,
    mockAxiosAdapter,
  };
};
