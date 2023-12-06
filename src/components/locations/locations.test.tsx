import Locations from './locations.tsx';
import {withStore} from '../../mocks/mock-component.tsx';
import {render, screen} from '@testing-library/react';
import {CityName} from '../../consts.ts';
import {makeFakeCity} from '../../mocks/mocks.ts';
import {OfferReducerType} from '../../types/offer.ts';

describe('Component: Locations', () => {
  it('should render correctly', () => {
    const mockCity = makeFakeCity();
    const {withStoreComponent} = withStore(<Locations/>, {OFFERS: {city: mockCity} as OfferReducerType});

    render(withStoreComponent);

    expect(screen.getByText(CityName.Paris));
    expect(screen.getByText(CityName.Amsterdam));
    expect(screen.getByText(CityName.Brussels));
    expect(screen.getByText(CityName.Cologne));
    expect(screen.getByText(CityName.Hamburg));
    expect(screen.getByText(CityName.Dusseldorf));
  });
});
