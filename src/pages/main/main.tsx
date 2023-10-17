import Header from '../../components/header/header.tsx';
import Locations from '../../components/locations/locations.tsx';
import CitiesPlaces from '../../components/places/cities-places/cities-places.tsx';

type MainProps = {
  countOffers: number;
}

function Main({countOffers}: MainProps) {
  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <CitiesPlaces countOffers={countOffers}/>
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
