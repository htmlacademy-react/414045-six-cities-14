import {ReactElement} from 'react';
import {getFavoritesCards} from '../../../mocks/favorites-cards.tsx';

function FavoritesLocations():ReactElement {
  const favoritesCards = getFavoritesCards();

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>Amsterdam</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {favoritesCards.map((favoritesCard) => favoritesCard)}
      </div>
    </li>
  );
}

export default FavoritesLocations;
