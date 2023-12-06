import {ReactElement} from 'react';
import {Offer} from '../../../types/offer.ts';
import PlaceCard from '../place-card/place-card.tsx';

type NearPlaceCardProps = {
  offer: Offer;
}

function NearPlaceCard({offer}: NearPlaceCardProps): ReactElement {
  return (
    <article className="near-places__card place-card" data-testid="near-place-card">
      <PlaceCard offer={offer}/>
    </article>
  );
}

export default NearPlaceCard;
