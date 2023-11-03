import {ReactElement} from 'react';
import {COUNT_NEAR_PLACE_CARDS} from '../consts.ts';
import NearPlaceCard from '../components/near-places/near-place-card/near-place-card.tsx';

function getNearPlaceCards():ReactElement[] {
  const nearPlaceCards = [];

  for (let i = 0; i < COUNT_NEAR_PLACE_CARDS; i++) {
    nearPlaceCards.push(<NearPlaceCard key={i}/>);
  }

  return nearPlaceCards;
}

export {getNearPlaceCards};
