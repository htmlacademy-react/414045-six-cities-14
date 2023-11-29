import Locations from '../../components/locations/locations.tsx';
import CitiesPlaces from '../../components/places/cities-places/cities-places.tsx';
import {useAppSelector} from '../../hooks/hooks.ts';
import {getLocationOffers} from '../../services/offer-service.ts';
import {getCity, getOffers} from '../../store/offer/offer-selector.ts';
import MainEmpty from '../../components/main-empty/main-empty.tsx';
import classNames from 'classnames';

function Main() {
  const offers = useAppSelector(getOffers);
  const city = useAppSelector(getCity);
  const cityOffers = getLocationOffers(city, offers);
  const isEmptyCityOffers = Boolean(!cityOffers.length);

  return (
    <div className="page page--gray page--main">
      <main className={classNames('page__main', 'page__main--index', {'page__main--index-empty': isEmptyCityOffers})}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations/>
        </div>
        <div className="cities">
          {cityOffers.length !== 0 ? <CitiesPlaces offers={cityOffers} city={city}/> : <MainEmpty cityName={city.name}/>}
        </div>
      </main>
    </div>
  );
}

export default Main;
