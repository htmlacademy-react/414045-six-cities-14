import Locations from '../../components/locations/locations.tsx';
import CitiesPlaces from '../../components/places/cities-places/cities-places.tsx';
import {MapPoint, Offer} from '../../types/offer.ts';
import Map from '../../components/map/map.tsx';
import {DEFAULT_CITY} from '../../consts.ts';

type MainProps = {
  countOffers: number;
  offers: Offer[];
}

function getCityPoints(cityName: string, offers: Offer[]): MapPoint[] {
  const points: MapPoint[] = [];

  offers.forEach((offer) => {
    if (offer.city.name === cityName) {
      points.push(offer.location);
    }
  });

  return points;
}

function Main({countOffers, offers}: MainProps) {
  const city = DEFAULT_CITY;
  const defaultPoint = offers[0].location;
  const points = getCityPoints(DEFAULT_CITY.name, offers);

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <CitiesPlaces countOffers={countOffers} offers={offers}/>
            <div className="cities__right-section">
              <Map className={'cities__map map'} city={city} points={points} selectedPoint={defaultPoint}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
