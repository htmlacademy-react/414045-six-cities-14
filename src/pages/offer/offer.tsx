import {ReactElement} from 'react';
import OfferGallery from '../../components/offer/offer-gallery/offer-gallery.tsx';
import OfferFeatures from '../../components/offer/offer-features/offer-features.tsx';
import OfferInside from '../../components/offer/offer-inside/offer-inside.tsx';
import OfferHost from '../../components/offer/offer-host/offer-host.tsx';
import OfferReviews from '../../components/offer/offer-reviews/offer-reviews.tsx';
import NearPlaces from '../../components/near-places/near-places/near-places.tsx';
import {Offer as OfferType} from '../../types/offer.ts';
import {useParams} from 'react-router-dom';
import NotFound from '../not-found/not-found.tsx';
import {RATING_COEFFICIENT} from '../../consts.ts';

type OfferProps = {
  offers: OfferType[];
}

function PremiumMark():ReactElement {
  return (
    <div className="offer__mark">
      <span>Premium</span>
    </div>
  );
}

function Offer({offers}:OfferProps):ReactElement {
  const params = useParams();
  const offer = offers.find((offerItem) => offerItem.id === Number(params.id));

  if (typeof offer === 'undefined') {
    return <NotFound/>;
  }

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
                  <span style={{width: `${offer.rating * RATING_COEFFICIENT}%`}}></span>
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
              <OfferReviews/>
            </div>
          </div>
          <section className="offer__map map"></section>
        </section>
        <div className="container">
          <NearPlaces/>
        </div>
      </main>
    </div>
  );
}

export default Offer;
