import {ReactElement} from 'react';
import {Offer} from '../../../types/offer.ts';

type OfferFeaturesProps = {
    offer: Offer;
}

function OfferFeatures({offer}: OfferFeaturesProps): ReactElement {
  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">
        {offer.type}
      </li>
      <li className="offer__feature offer__feature--bedrooms">
        {offer.bedrooms} {offer.bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}
      </li>
      <li className="offer__feature offer__feature--adults">
        Max {offer.maxAdults} {offer.maxAdults > 1 ? 'adults' : 'adult'}
      </li>
    </ul>
  );
}

export default OfferFeatures;
