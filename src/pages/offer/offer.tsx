import {ReactElement, useEffect, useState} from 'react';
import OfferGallery from '../../components/offer/offer-gallery/offer-gallery.tsx';
import OfferFeatures from '../../components/offer/offer-features/offer-features.tsx';
import OfferInside from '../../components/offer/offer-inside/offer-inside.tsx';
import OfferHost from '../../components/offer/offer-host/offer-host.tsx';
import OfferReviews from '../../components/offer/offer-reviews/offer-reviews.tsx';
import NearPlaces from '../../components/places/near-places/near-places.tsx';
import {useParams} from 'react-router-dom';
import NotFound from '../not-found/not-found.tsx';
import Map from '../../components/map/map.tsx';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks.ts';
import {
  loadNearbyOffersAction,
  loadOfferAction,
  loadReviewsAction,
  toggleFavoriteOfferAction
} from '../../store/api-action.ts';
import {getNearbyOffers, getOffer, getReviews} from '../../store/offer/offer-selector.ts';
import Layout from '../../components/layout/layout.tsx';
import {getIsLoading as isLoadingSelector} from '../../store/loading/loading-selector.ts';
import Spinner from '../../components/spinner/spinner.tsx';
import {AppRoute, AuthorizationStatus} from '../../consts.ts';
import {redirectToRoute} from '../../store/actions.ts';
import {getAuthorizationStatus} from '../../store/auth/auth-selector.ts';
import classNames from 'classnames';
import {setActiveMapPoint} from '../../store/offer/offer-slice.ts';
import {getRatingStyle} from '../../utils/utils.ts';

function PremiumMark(): ReactElement {
  return (
    <div className="offer__mark">
      <span>Premium</span>
    </div>
  );
}

function Offer(): ReactElement {
  const dispatch = useAppDispatch();
  const params = useParams();
  const offerId = params.id ?? '';

  const offer = useAppSelector(getOffer);
  const nearbyOffers = useAppSelector(getNearbyOffers);
  const reviews = useAppSelector(getReviews);
  const isLoading = useAppSelector(isLoadingSelector);
  const authStatus = useAppSelector(getAuthorizationStatus);
  const mapOffers = [...nearbyOffers].slice(0, 3);
  const [isFavorite, setIsFavorite] = useState(false);

  if (offer !== null) {
    mapOffers.push(offer);
  }

  useEffect(() => {
    dispatch(loadOfferAction(offerId));
    dispatch(loadReviewsAction(offerId));
    dispatch(loadNearbyOffersAction(offerId));
  }, [dispatch, offerId]);

  useEffect(() => {
    if (offer) {
      setIsFavorite(offer.isFavorite);
      dispatch(setActiveMapPoint({activeMapPoint: offer.location}));
    }
  }, [dispatch, offer]);

  if (offer === null) {
    return isLoading ? <Spinner/> : <NotFound/>;
  }

  const onClickFavoriteButton = () => {
    if (authStatus !== AuthorizationStatus.Auth) {
      dispatch(redirectToRoute(AppRoute.Login));
    }

    setIsFavorite(!isFavorite);
    dispatch(toggleFavoriteOfferAction({offerId: offer.id, status: Number(!isFavorite)}));
  };

  return (
    <Layout>
      <div className="page" data-testid="offer-page">
        <main className="page__main page__main--offer">
          <section className="offer">
            <OfferGallery offer={offer}/>
            <div className="offer__container container">
              <div className="offer__wrapper">
                {offer.isPremium ? <PremiumMark/> : ''}
                <div className="offer__name-wrapper">
                  <h1 className="offer__name">
                    {offer.title}
                  </h1>
                  <button onClick={onClickFavoriteButton} className={classNames('offer__bookmark-button', 'button', {'offer__bookmark-button--active': isFavorite})} type="button">
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
                <OfferReviews offerId={offer.id} reviews={reviews}/>
              </div>
            </div>
            <section className="offer__map map">
              <Map className={'offer__map map'} offers={mapOffers} city={offer.city}/>
            </section>
          </section>
          <div className="container">
            <NearPlaces offers={nearbyOffers}/>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default Offer;
