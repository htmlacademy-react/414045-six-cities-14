import {createMemoryHistory, MemoryHistory} from 'history';
import {AppRoute, AuthorizationStatus} from '../../consts.ts';
import {withRouter, withStore} from '../../mocks/mock-component.tsx';
import {Route, Routes} from 'react-router-dom';
import PrivateRoute from './private-route.tsx';
import {render, screen} from '@testing-library/react';
import {AuthState} from '../../types/user.ts';

describe('Component: PrivateRoute', () => {
  let mockHistory: MemoryHistory;

  beforeAll(() => {
    mockHistory = createMemoryHistory();
  });

  beforeEach(() => {
    mockHistory.push(AppRoute.Main);
  });

  it('should render component for public', () => {
    const expectedText = 'public route';
    const notExpectedText = 'private route';
    const component = withRouter(
      <Routes>
        <Route path={AppRoute.Login} element={<p>{expectedText}</p>}/>
        <Route path={AppRoute.Main} element={
          <PrivateRoute>
            <p>{notExpectedText}</p>
          </PrivateRoute>
        }
        />
      </Routes>
    );
    const {withStoreComponent} = withStore(component, {AUTH: {authorizationStatus: AuthorizationStatus.NoAuth} as AuthState});

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.queryByText(notExpectedText)).not.toBeInTheDocument();
  });

  it('should render component for private', () => {
    const expectedText = 'private route';
    const notExpectedText = 'public route';
    const component = withRouter(
      <Routes>
        <Route path={AppRoute.Login} element={<p>{notExpectedText}</p>}/>
        <Route path={AppRoute.Main} element={
          <PrivateRoute>
            <p>{expectedText}</p>
          </PrivateRoute>
        }
        />
      </Routes>
    );
    const {withStoreComponent} = withStore(component, {AUTH: {authorizationStatus: AuthorizationStatus.Auth} as AuthState});

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.queryByText(notExpectedText)).not.toBeInTheDocument();
  });
});
