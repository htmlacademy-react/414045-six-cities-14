import {configureMockStore, MockStore} from '@jedmao/redux-mock-store';
import {redirect} from './redirect.ts';
import {State} from '../../types/state.ts';
import {AnyAction} from '@reduxjs/toolkit';
import {browserHistory} from '../../browser-history.ts';
import {redirectToRoute} from '../actions.ts';
import {AppRoute} from '../../consts.ts';

vi.mock('../../../browser-history', () => ({
  default: {
    location: { pathname: ''},
    push(path: string) {
      this.location.pathname = path;
    }
  }
}));

describe('Middleware', () => {
  let store: MockStore;

  beforeAll(() => {
    const middleware = [redirect];
    const mockStoreCreator = configureMockStore<State, AnyAction>(middleware);
    store = mockStoreCreator();
  });

  beforeEach(() => {
    browserHistory.push(AppRoute.Main);
  });

  it('should redirect ot "/login" with "redirectToRoute" action', () => {
    const redirectAction = redirectToRoute(AppRoute.Login);
    store.dispatch(redirectAction);
    expect(browserHistory.location.pathname).toBe(AppRoute.Login);
  });

  it('should not redirect to "/login" with empty action', () => {
    const redirectAction = {type: ''};

    store.dispatch(redirectAction);
    expect(browserHistory.location.pathname).not.toBe(AppRoute.Login);
  });
});
