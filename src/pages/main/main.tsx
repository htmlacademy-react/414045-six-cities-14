import Locations from '../../components/locations/locations.tsx';
import CitiesPlaces from '../../components/places/cities-places/cities-places.tsx';
import Map from '../../components/map/map.tsx';
import {useAppSelector} from '../../hooks/hooks.ts';
import {getLocationOffers} from '../../services/offer-service.ts';

function Main() {
  const offers = useAppSelector((store) => store.offers);
  const city = useAppSelector((store) => store.city);
  const cityOffers = getLocationOffers(city, offers);

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <CitiesPlaces offers={cityOffers} cityName={city.name}/>
            <div className="cities__right-section">
              <Map className={'cities__map map'} city={city} offers={cityOffers}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
