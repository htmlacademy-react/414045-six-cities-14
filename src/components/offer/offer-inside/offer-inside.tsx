import {ReactElement} from 'react';
import {Offer} from '../../../types/offer.ts';

type OfferInsideProps = {
  offer: Offer;
}

function OfferInside({offer}:OfferInsideProps):ReactElement {
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {offer.goods.map((offerGood) => <li key={offerGood} className="offer__inside-item" data-testid="offer__inside-item">{offerGood}</li>)}
      </ul>
    </div>
  );
}

export default OfferInside;
