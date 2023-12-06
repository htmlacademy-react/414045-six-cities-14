import CitiesPlaceCard from '../cities-place-card/cities-place-card.tsx';
import {Offer} from '../../../types/offer.ts';

type PlaceCardListProps = {
  offers: Offer[];
}

function PlaceCardList({offers}: PlaceCardListProps) {
  return (
    <div className="cities__places-list places__list tabs__content" data-testid="place-card-list">
      {offers.map((offer) => <CitiesPlaceCard key={offer.id} offer={offer} offers={offers}/>)}
    </div>
  );
}

export default PlaceCardList;
