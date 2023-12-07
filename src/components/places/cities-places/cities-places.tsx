import {ReactElement, SyntheticEvent, useEffect, useState} from 'react';
import PlacesOptions from '../places-options/places-options.tsx';
import PlaceCardList from '../place-card-list/place-card-list.tsx';
import {City, Offer} from '../../../types/offer.ts';
import {DEFAULT_SORTING_OPTION, SortOption} from '../../../consts.ts';
import {sortOffers} from '../../../services/offer-service.ts';
import Map from '../../map/map.tsx';

type CitiesPlacesProps = {
  city: City;
  offers: Offer[];
}

function CitiesPlaces({offers, city}: CitiesPlacesProps): ReactElement {
  const [sortedOffers, setSortedOffers] = useState(offers);
  const [isOpenSortPopup, setIsOpenSortPopup] = useState<boolean>(false);
  const [currentSortingOption, setCurrentSortingOption] = useState<SortOption>(DEFAULT_SORTING_OPTION);

  useEffect(() => {
    setSortedOffers(offers);
  }, [offers]);

  const handleChangeOfferOption = (evt: SyntheticEvent) => {
    if (evt.target instanceof HTMLElement) {
      const optionSign: SortOption = evt.target.getAttribute('id') as SortOption ?? DEFAULT_SORTING_OPTION;
      setCurrentSortingOption(optionSign);
      setSortedOffers(sortOffers(offers, optionSign));
    }

    setIsOpenSortPopup(false);
  };

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{sortedOffers.length} {sortedOffers.length > 1 ? 'places' : 'place'} to stay in {city.name}</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex={0} onClick={() => setIsOpenSortPopup(!isOpenSortPopup)}>
            {currentSortingOption}
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <PlacesOptions isOpen={isOpenSortPopup} handleChangeOption={handleChangeOfferOption}/>
        </form>
        <PlaceCardList offers={sortedOffers}/>
      </section>
      <div className="cities__right-section">
        <Map className={'cities__map map'} city={city} offers={offers}/>
      </div>
    </div>
  );
}

export default CitiesPlaces;
