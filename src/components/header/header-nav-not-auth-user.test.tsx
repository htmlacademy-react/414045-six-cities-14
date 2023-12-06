import HeaderNavNotAuthUser from './header-nav-not-auth-user.tsx';
import {withRouter} from '../../mocks/mock-component.tsx';
import {render, screen} from '@testing-library/react';

describe('Component: HeaderNavNotAuthUser', () => {
  it('should render correctly', () => {
    const componentWithRouter = withRouter(<HeaderNavNotAuthUser/>);

    render(componentWithRouter);

    expect(screen.getByText('Sign in'));
  });
});
