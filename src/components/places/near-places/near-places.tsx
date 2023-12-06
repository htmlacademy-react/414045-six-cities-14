import {ReactElement} from 'react';
import {Offer} from '../../../types/offer.ts';
import NearPlaceCard from '../near-place-card/near-place-card.tsx';

type NearPlacesProps = {
  offers: Offer[];
}

function NearPlaces({offers}: NearPlacesProps): ReactElement {
  const preparedOffers = [...offers].slice(0, 3);

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {preparedOffers.map((offer) => <NearPlaceCard key={offer.id} offer={offer}/>)}
      </div>
    </section>
  );
}

export default NearPlaces;
