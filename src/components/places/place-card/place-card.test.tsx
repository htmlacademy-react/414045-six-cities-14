import {withRouter, withStore} from '../../../mocks/mock-component.tsx';
import PlaceCard from './place-card.tsx';
import {makeFakeOffer} from '../../../mocks/mocks.ts';
import {AuthorizationStatus} from '../../../consts.ts';
import {AuthState} from '../../../types/user.ts';
import {render, screen} from '@testing-library/react';

describe('Component: PlaceCard', () => {
  it('should render correctly', () => {
    const mockOffer = makeFakeOffer();
    const componentWithRouter = withRouter(<PlaceCard offer={mockOffer}/>);
    const {withStoreComponent} = withStore(componentWithRouter, {AUTH: {authorizationStatus: AuthorizationStatus.Auth} as AuthState});

    render(withStoreComponent);

    expect(screen.getByAltText('Place image'));
    expect(screen.getByText(/night/i));
    expect(screen.getByText(`€${mockOffer.price}`));
    expect(screen.getByText('In bookmarks'));
    expect(screen.getByText('Rating'));
    expect(screen.getByText(mockOffer.title));
    expect(screen.getByText(mockOffer.type));
  });
});
