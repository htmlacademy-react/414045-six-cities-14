import {ReactElement, SyntheticEvent} from 'react';
import {useAppDispatch} from '../../hooks/hooks.ts';
import {selectCity} from '../../storage/action.ts';
import {CITIES} from '../../consts.ts';
import {AppDispatch} from '../../types/state.ts';
import {City} from '../../types/offer.ts';

function getOnChangeCityHandler(city: City, dispatch: AppDispatch) {
  return (evt: SyntheticEvent) => {
    evt.preventDefault();
    dispatch(selectCity({selectedCity: city}));
  };
}

function Locations(): ReactElement {
  const dispatch = useAppDispatch();

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => (
          <li key={city.name} className="locations__item">
            <a className="locations__item-link tabs__item" href="#" onClick={getOnChangeCityHandler(city, dispatch)}>
              <span>{city.name}</span>
            </a>
          </li>)
        )}
      </ul>
    </section>
  );
}

export default Locations;
