import {Offer} from '../../../types/offer.ts';
import PlaceCard from '../place-card/place-card.tsx';
import {setActiveMapPoint} from '../../../store/offer/offer-slice.ts';
import {useAppDispatch} from '../../../hooks/hooks.ts';
import {getOfferMapPoint} from '../../../services/offer-service.ts';
import {ReactElement} from 'react';

type CitiesPlaceCardProps = {
  offer: Offer;
  offers: Offer[];
}

function CitiesPlaceCard({offer, offers}: CitiesPlaceCardProps): ReactElement {
  const dispatch = useAppDispatch();

  const mouseOverHandler = (offerId: number) => {
    const mapPoint = getOfferMapPoint(offers, offerId);
    dispatch(setActiveMapPoint({activeMapPoint: mapPoint}));
  };

  const mouseOutHandler = () => {
    dispatch(setActiveMapPoint({activeMapPoint: undefined}));
  };

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
