import {ReactElement} from 'react';
import {Offer} from '../../types/offer.ts';
import Footer from '../../components/footer/footer.tsx';
import FavoritesLocations from '../../components/favorites/favorites-locations/favorites-locations.tsx';

type FavoritesProps = {
    offers: Offer[];
}

type Favorites = {
    cityName: string;
    offers: Offer[];
}

function prepareFavoritesByCity(offers: Offer[]): Favorites[] {
  const favoritesByCity: Favorites[] = [];

  offers.forEach((offer: Offer) => {
    const favorites = favoritesByCity.find((favoritesFromCity) => favoritesFromCity.cityName === offer.city.name);

    if (typeof favorites === 'undefined') {
      favoritesByCity.push({
        cityName: offer.city.name,
        offers: [offer]
      });
    } else {
      favorites.offers.push(offer);
    }
  });

  return favoritesByCity;
}

function Favorites({offers}: FavoritesProps): ReactElement {
  const favoritesByCity = prepareFavoritesByCity(offers);

  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoritesByCity.map((favorites) => (<FavoritesLocations key={favorites.cityName} favorites={favorites}/>))}
            </ul>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Favorites;
