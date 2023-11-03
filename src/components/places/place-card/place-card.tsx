import {Fragment, ReactElement} from 'react';
import {Offer} from '../../../types/offer.ts';
import {generatePath, Link} from 'react-router-dom';
import PremiumMark from '../../premium-mark/premium-mark.tsx';
import {getRatingStyle} from '../../../utils.ts';
import {AppRoute} from '../../../consts.ts';
import classNames from 'classnames';

type PlaceCardProps = {
  offer: Offer;
}

function PlaceCard({offer}: PlaceCardProps): ReactElement {
  return (
    <Fragment>
      {offer.isPremium ? <PremiumMark/> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={generatePath(AppRoute.Offer, {id: offer.id.toString()})}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={classNames(
            'place-card__bookmark-button',
            'button',
            {'place-card__bookmark-button--active': offer.isFavorite}
          )} type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={getRatingStyle(offer.rating)}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Offer, {id: offer.id.toString()})}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </Fragment>
  );
}

export default PlaceCard;
