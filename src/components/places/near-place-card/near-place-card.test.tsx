import {render, screen} from '@testing-library/react';
import NearPlaceCard from './near-place-card.tsx';
import {makeFakeOffer} from '../../../mocks/mocks.ts';

describe('Component: NearPlaceCard', () => {
  it('should render correctly', () => {
    vi.mock('../place-card/place-card.tsx', () => ({default: () => <div>PlaceCard</div>}));

    const mockOffer = makeFakeOffer();

    render(<NearPlaceCard offer={mockOffer}/>);

    expect(screen.getByTestId('near-place-card'));
    expect(screen.getByText('PlaceCard'));
  });
});
