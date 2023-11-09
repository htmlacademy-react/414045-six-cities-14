import {ReactElement} from 'react';
import {Offer} from '../../../types/offer.ts';
import PlaceCard from '../place-card/place-card.tsx';

type CitiesPlaceCardProps = {
  offer: Offer;
  mouseOverHandler: (offerId: number) => void;
}

function CitiesPlaceCard({offer, mouseOverHandler}: CitiesPlaceCardProps): ReactElement {
  return (
    <article className="cities__card place-card" onMouseOver={() => {
      mouseOverHandler(offer.id);
    }}
    >
      <PlaceCard offer={offer}/>
    </article>
  );
}

export default CitiesPlaceCard;
