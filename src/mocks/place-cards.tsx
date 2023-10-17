import {COUNT_PLACE_CARDS} from '../consts.ts';
import PlaceCard from '../components/places/place-card/place-card.tsx';
import {ReactElement} from 'react';

function getPlaceCards():ReactElement[] {
  const placeCards = [];

  for (let i = 0; i < COUNT_PLACE_CARDS; i++) {
    placeCards.push(<PlaceCard/>);
  }

  return placeCards;
}

export {getPlaceCards};
