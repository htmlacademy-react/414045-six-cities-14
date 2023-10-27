import {Offer} from '../../../types/offer.ts';
import PlaceCard from '../place-card/place-card.tsx';
import {useState} from 'react';

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
      {offers.map((offer) => <PlaceCard key={offer.id} offer={offer} mouseOverHandler={mouseOverHandler}/>)}
    </div>
  );
}

export default PlaceCardList;
