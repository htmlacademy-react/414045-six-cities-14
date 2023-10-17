import {ReactElement} from 'react';
import {COUNT_FAVORITES_LOCATIONS} from '../consts.ts';
import FavoritesLocations from '../components/favorites/favorites-locations/favorites-locations.tsx';

function getFavoritesLocations():ReactElement[] {
  const favoritesLocationsItems = [];

  for (let i = 0; i < COUNT_FAVORITES_LOCATIONS; i++) {
    favoritesLocationsItems.push(<FavoritesLocations/>);
  }

  return favoritesLocationsItems;
}

export {getFavoritesLocations};
