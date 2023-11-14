import {ReactElement, SyntheticEvent, useEffect, useState} from 'react';
import PlacesOptions from '../places-options/places-options.tsx';
import PlaceCardList from '../place-card-list/place-card-list.tsx';
import {Offer} from '../../../types/offer.ts';
import {DEFAULT_SORTING_OPTION} from '../../../consts.ts';
import {sortOffers} from '../../../services/offer-service.ts';

type CitiesPlacesProps = {
  cityName: string;
  offers: Offer[];
}

function CitiesPlaces({offers, cityName}: CitiesPlacesProps): ReactElement {
  const [sortedOffers, setSortedOffers] = useState(offers);
  const [isOpenSortPopup, setIsOpenSortPopup] = useState<boolean>(false);
  const [currentSortingOption, setCurrentSortingOption] = useState<string>(DEFAULT_SORTING_OPTION);

  useEffect(() => {
    setSortedOffers(offers);
  }, [offers]);

  const onChangeOfferOptionHandler = (evt: SyntheticEvent) => {
    if (evt.target instanceof HTMLElement) {
      const optionSign = evt.target.getAttribute('id') ?? DEFAULT_SORTING_OPTION;
      setCurrentSortingOption(optionSign);
      setSortedOffers(sortOffers(offers, optionSign));
    }

    setIsOpenSortPopup(false);
  };

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{sortedOffers.length} places to stay in {cityName}</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0} onClick={() => setIsOpenSortPopup(!isOpenSortPopup)}>
          {currentSortingOption}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <PlacesOptions isOpen={isOpenSortPopup} onChangeOptionHandler={onChangeOfferOptionHandler}/>
      </form>
      <PlaceCardList offers={sortedOffers}/>
    </section>
  );
}

export default CitiesPlaces;
