import FavoritesCard from './favorites-card.tsx';
import {makeFakeOffer} from '../../../mocks/mocks.ts';
import {withRouter, withStore} from '../../../mocks/mock-component.tsx';
import {render, screen} from '@testing-library/react';

describe('Component: FavoritesCard', () => {
  it('should render correctly', () => {
    const mockOffer = makeFakeOffer();
    const componentWithRouter = withRouter(<FavoritesCard offer={mockOffer}/>);
    const {withStoreComponent} = withStore(componentWithRouter);

    render(withStoreComponent);

    expect(screen.getByText('In bookmarks'));
    expect(screen.getByText('Rating'));
    expect(screen.getByText(mockOffer.type));
    expect(screen.getByText(mockOffer.title));
    expect(screen.getByText(`€${mockOffer.price}`));
    expect(screen.getByText(/night/i));
    expect(screen.getByAltText('Place image'));
  });
});
