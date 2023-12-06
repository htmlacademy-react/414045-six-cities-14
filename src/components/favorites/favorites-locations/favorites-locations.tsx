import {ReactElement} from 'react';
import FavoritesCard from '../favorites-card/favorites-card.tsx';
import {Favorites} from '../../../types/offer.ts';


type FavoritesLocationsProps = {
    favorites: Favorites;
}

function FavoritesLocations({favorites}: FavoritesLocationsProps):ReactElement {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{favorites.cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {favorites.offers.map((offer) => <FavoritesCard key={offer.id} offer={offer}/>)}
      </div>
    </li>
  );
}

export default FavoritesLocations;
