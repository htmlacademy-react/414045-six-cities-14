import {ReactElement} from 'react';
import {Offer} from '../../../types/offer.ts';
import PlaceCard from '../place-card/place-card.tsx';

type CitiesPlaceCardProps = {
  offer: Offer;
  mouseOverHandler: (offerId: number) => void;
  mouseOutHandler: () => void;
}

function CitiesPlaceCard({offer, mouseOverHandler, mouseOutHandler}: CitiesPlaceCardProps): ReactElement {
  return (
    <article className="cities__card place-card" onMouseEnter={() => {
      mouseOverHandler(offer.id);
    }}
    onMouseLeave={mouseOutHandler}
    >
      <PlaceCard offer={offer}/>
    </article>
  );
}

export default CitiesPlaceCard;
