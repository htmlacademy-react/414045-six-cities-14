import Layout from './layout.tsx';
import {withStore} from '../../mocks/mock-component.tsx';
import {LoadingStateType} from '../../types/loading.ts';
import {render, screen} from '@testing-library/react';


describe('Component: Layout', () => {
  it('should render correctly', () => {
    vi.mock('../spinner/spinner.tsx', () => ({default: () => <div>spinner</div>}));
    vi.mock('../header/header.tsx', () => ({default: () => <div>header</div>}));

    const {withStoreComponent} = withStore(<Layout><p>children</p></Layout>, {LOADING: {isLoading: false} as LoadingStateType});

    render(withStoreComponent);

    expect(screen.getByText('children'));
    expect(screen.getByText('header'));
  });

  it('should render "Spinner" if "isLoading"', () => {
    vi.mock('../spinner/spinner.tsx', () => ({default: () => <div>spinner</div>}));
    vi.mock('../header/header.tsx', () => ({default: () => <div>header</div>}));

    const {withStoreComponent} = withStore(<Layout><p>children</p></Layout>, {LOADING: {isLoading: true} as LoadingStateType});

    render(withStoreComponent);

    expect(screen.getByText('spinner'));
    expect(screen.getByText('header'));
  });
});
