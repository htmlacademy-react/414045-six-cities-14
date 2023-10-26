import Locations from '../../components/locations/locations.tsx';
import CitiesPlaces from '../../components/places/cities-places/cities-places.tsx';
import {Offer} from '../../types/offer.ts';

type MainProps = {
  countOffers: number;
  offers: Offer[];
}

function Main({countOffers, offers}: MainProps) {
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
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
