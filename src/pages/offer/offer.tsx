import {ReactElement} from 'react';
import OfferGallery from '../../components/offer/offer-gallery/offer-gallery.tsx';
import OfferFeatures from '../../components/offer/offer-features/offer-features.tsx';
import OfferInside from '../../components/offer/offer-inside/offer-inside.tsx';
import OfferHost from '../../components/offer/offer-host/offer-host.tsx';
import OfferReviews from '../../components/offer/offer-reviews/offer-reviews.tsx';
import NearPlaces from '../../components/places/near-places/near-places.tsx';
import {useParams} from 'react-router-dom';
import NotFound from '../not-found/not-found.tsx';
import {offerReviews} from '../../mocks/offer-reviews.ts';
import Map from '../../components/map/map.tsx';
import {getRatingStyle} from '../../utils.ts';
import {useAppSelector} from '../../hooks/hooks.ts';
import {getLocationOffers} from '../../services/offer-service.ts';

function PremiumMark(): ReactElement {
  return (
    <div className="offer__mark">
      <span>Premium</span>
    </div>
  );
}

function Offer(): ReactElement {
  const offers = useAppSelector((store) => store.offers);
  const params = useParams();
  const offer = offers.find((offerItem) => offerItem.id === Number(params.id));
  const reviews = offerReviews;

  if (typeof offer === 'undefined') {
    return <NotFound/>;
  }

  const cityOffers = getLocationOffers(offer.city, offers);

  return (
    <div className="page">
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery/>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium ? <PremiumMark/> : ''}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer.title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={getRatingStyle(offer.rating)}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <OfferFeatures offer={offer}/>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <OfferInside offer={offer}/>
              <OfferHost offer={offer}/>
              <OfferReviews reviews={reviews}/>
            </div>
          </div>
          <section className="offer__map map">
            <Map className={'offer__map map'} offers={cityOffers} city={offer.city}/>
          </section>
        </section>
        <div className="container">
          <NearPlaces offers={cityOffers} currentOffer={offer}/>
        </div>
      </main>
    </div>
  );
}

export default Offer;