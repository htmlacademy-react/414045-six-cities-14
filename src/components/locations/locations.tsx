import {ReactElement, SyntheticEvent} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks.ts';
import {CITIES} from '../../consts.ts';
import {AppDispatch} from '../../types/state.ts';
import {City} from '../../types/offer.ts';
import {setCity} from '../../store/offer/offer-slice.ts';
import {getCity} from '../../store/offer/offer-selector.ts';
import classNames from 'classnames';

function handleChangeCity(city: City, dispatch: AppDispatch) {
  return (evt: SyntheticEvent) => {
    evt.preventDefault();
    dispatch(setCity({city: city}));
  };
}

function Locations(): ReactElement {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector(getCity);
  const isCurrentCity = (city: City) => city.name === currentCity.name;

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => (
          <li key={city.name} className="locations__item">
            <a className={classNames('locations__item-link', 'tabs__item', {'tabs__item--active': isCurrentCity(city)})} href="#" onClick={handleChangeCity(city, dispatch)}>
              <span>{city.name}</span>
            </a>
          </li>)
        )}
      </ul>
    </section>
  );
}

export default Locations;
