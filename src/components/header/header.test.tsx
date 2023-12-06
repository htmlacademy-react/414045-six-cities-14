import {withRouter, withStore} from '../../mocks/mock-component.tsx';
import Header from './header.tsx';
import {render, screen} from '@testing-library/react';
import {AuthorizationStatus} from '../../consts.ts';
import {AuthState} from '../../types/user.ts';

describe('Component: Header', () => {
  it('should render correctly', () => {
    const componentWithRouter = withRouter(<Header/>);
    const {withStoreComponent} = withStore(componentWithRouter, {AUTH: {authorizationStatus: AuthorizationStatus.NoAuth} as AuthState});

    render(withStoreComponent);

    expect(screen.getByAltText('6 cities logo'));
  });

  it('should render "HeaderNavAuthUser"', () => {
    vi.mock('./header-nav-auth-user.tsx', () => ({default: () => <div>HeaderNavAuthUser</div>}));
    const componentWithRouter = withRouter(<Header/>);
    const {withStoreComponent} = withStore(componentWithRouter, {AUTH: {authorizationStatus: AuthorizationStatus.Auth} as AuthState});

    render(withStoreComponent);

    expect(screen.getByText('HeaderNavAuthUser'));
  });

  it('should render "HeaderNavNotAuthUser"', () => {
    vi.mock('./header-nav-not-auth-user.tsx', () => ({default: () => <div>HeaderNavNotAuthUser</div>}));
    const componentWithRouter = withRouter(<Header/>);
    const {withStoreComponent} = withStore(componentWithRouter, {AUTH: {authorizationStatus: AuthorizationStatus.NoAuth} as AuthState});

    render(withStoreComponent);

    expect(screen.getByText('HeaderNavNotAuthUser'));
  });
});
