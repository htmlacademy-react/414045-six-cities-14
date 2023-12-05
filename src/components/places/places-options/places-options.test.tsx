import {render, screen} from '@testing-library/react';
import PlacesOptions from './places-options.tsx';
import {SORTING_OPTIONS} from '../../../consts.ts';

describe('Component: PlacesOptions', () => {
  it('should render correctly', () => {
    const placesOptionContainerTestId = 'places_options';
    const optionTestId = 'places_option';
    const mockHandler = vi.fn();

    render(<PlacesOptions isOpen onChangeOptionHandler={mockHandler}/>);

    expect(screen.getByTestId(placesOptionContainerTestId)).toBeInTheDocument();
    expect(screen.getByTestId(placesOptionContainerTestId)).toHaveClass('places__options--opened');
    expect(screen.getAllByTestId(optionTestId).length).toEqual(SORTING_OPTIONS.length);
  });

  it('container must not have class "places__options--opened"', () => {
    const placesOptionContainerTestId = 'places_options';
    const mockHandler = vi.fn();

    render(<PlacesOptions isOpen={false} onChangeOptionHandler={mockHandler}/>);

    expect(screen.getByTestId(placesOptionContainerTestId)).not.toHaveClass('places__options--opened');
  });
});
