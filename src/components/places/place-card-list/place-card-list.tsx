import {useState} from 'react';
import CitiesPlaceCard from '../cities-place-card/cities-place-card.tsx';
import {ActiveMapPoint, Offer} from '../../../types/offer.ts';
import {useAppDispatch, useAppSelector} from '../../../hooks/hooks.ts';
import {setActiveMapPoint} from '../../../storage/action.ts';

type PlaceCardListProps = {
  offers: Offer[];
}

function getOfferMapPoint(offers: Offer[], offerId: number): ActiveMapPoint {
  return offers.find((offer: Offer) => offer.id === offerId)?.location;
}

function PlaceCardList({offers}: PlaceCardListProps) {
  const [, setActivePlaceCardId] = useState<undefined | number>(undefined);
  const currentActiveMapPoint = useAppSelector((store) => store.activeMapPoint);
  const dispatch = useAppDispatch();

  const mouseOverHandler = (offerId: number) => {
    const mapPoint = getOfferMapPoint(offers, offerId);

    setActivePlaceCardId(offerId);

    if (mapPoint !== currentActiveMapPoint) {
      dispatch(setActiveMapPoint({activeMapPoint: mapPoint}));
    }
  };

  const mouseOutHandler = () => {
    dispatch(setActiveMapPoint({activeMapPoint: undefined}));
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <CitiesPlaceCard key={offer.id} offer={offer} mouseOverHandler={mouseOverHandler} mouseOutHandler={mouseOutHandler}/>)}
    </div>
  );
}

export default PlaceCardList;
