import {render, screen} from '@testing-library/react';
import MainEmpty from './main-empty.tsx';
import {CityName} from '../../consts.ts';

describe('Component: MainEmpty', () => {
  it('should render correctly', () => {
    const cityName = CityName.Paris;
    const expectedText = `We could not find any property available at the moment in ${cityName}`;

    render(<MainEmpty cityName={cityName}/>);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
