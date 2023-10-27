import {ReactElement} from 'react';
import PlacesOptions from '../places-options/places-options.tsx';
import PlaceCardList from '../place-card-list/place-card-list.tsx';
import {Offer} from '../../../types/offer.ts';

type CitiesPlacesProps = {
  countOffers: number;
  offers: Offer[];
}

function CitiesPlaces({countOffers, offers}: CitiesPlacesProps): ReactElement {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{countOffers} places to stay in Amsterdam</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0}>
                  Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <PlacesOptions/>
      </form>
      <PlaceCardList offers={offers}/>
    </section>
  );
}

export default CitiesPlaces;
