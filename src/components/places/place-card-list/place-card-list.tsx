import {Offer} from '../../../types/offer.ts';
import {useState} from 'react';
import CitiesPlaceCard from '../cities-place-card/cities-place-card.tsx';

type PlaceCardListProps = {
  offers: Offer[];
}

function PlaceCardList({offers}: PlaceCardListProps) {
  const [, setActivePlaceCardId] = useState<undefined|number>(undefined);

  const mouseOverHandler = (offerId: number) => {
    setActivePlaceCardId(offerId);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <CitiesPlaceCard key={offer.id} offer={offer} mouseOverHandler={mouseOverHandler}/>)}
    </div>
  );
}

export default PlaceCardList;
