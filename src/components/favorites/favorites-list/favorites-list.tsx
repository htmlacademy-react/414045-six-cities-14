import {ReactElement} from 'react';
import FavoritesLocations from '../favorites-locations/favorites-locations.tsx';
import {Favorites} from '../../../types/offer.ts';

type FavoritesListProps = {
    favoritesByCity: Favorites[];
}

export function FavoritesList({favoritesByCity}: FavoritesListProps): ReactElement {
  return (
    <main className="page__main page__main--favorites" data-testid="favorites-page">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {favoritesByCity.map((favorites) => (
              <FavoritesLocations key={favorites.cityName} favorites={favorites}/>))}
          </ul>
        </section>
      </div>
    </main>
  );
}
