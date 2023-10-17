import {ReactElement} from 'react';
import {COUNT_FAVORITES_CARTS} from '../consts.ts';
import FavoritesCard from '../components/favorites/favorites-card/favorites-card.tsx';

function getFavoritesCards():ReactElement[] {
  const favoritesLocationsItems = [];

  for (let i = 0; i < COUNT_FAVORITES_CARTS; i++) {
    favoritesLocationsItems.push(<FavoritesCard/>);
  }

  return favoritesLocationsItems;
}

export {getFavoritesCards};
