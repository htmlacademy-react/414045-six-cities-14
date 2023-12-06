import {MouseEventHandler, ReactElement} from 'react';
import {SORTING_OPTIONS} from '../../../consts.ts';
import classNames from 'classnames';

type PlacesOptionsProps = {
  isOpen: boolean;
  onChangeOptionHandler: MouseEventHandler;
}

function PlacesOptions({isOpen, onChangeOptionHandler}: PlacesOptionsProps): ReactElement {
  return (
    <ul className={classNames('places__options', 'places__options--custom', {'places__options--opened': isOpen})} data-testid="places_options">
      {SORTING_OPTIONS.map((option) => (
        <li key={option.sign} id={option.sign} onClick={onChangeOptionHandler} className="places__option places__option--active" tabIndex={0} data-testid="places_option">{option.name}</li>)
      )}
    </ul>
  );
}

export default PlacesOptions;
