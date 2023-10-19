import {ReactElement} from 'react';
import {getNearPlaceCards} from '../../../mocks/near-place-cards.tsx';

function NearPlaces():ReactElement {
  const nearPlaceCards = getNearPlaceCards();

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearPlaceCards.map((nearPlaceCard) => nearPlaceCard)}
      </div>
    </section>
  );
}

export default NearPlaces;
