import {ReactElement} from 'react';
import {Offer} from '../../../types/offer.ts';
import {Link} from 'react-router-dom';
import PremiumMark from '../../premium-mark/premium-mark.tsx';
import {getRatingStyle} from '../../../utils.ts';

type PlaceCardProps = {
  offer: Offer;
  mouseOverHandler: (offerId: number) => void;
}

function PlaceCard({offer, mouseOverHandler}: PlaceCardProps): ReactElement {
  return (
    <article className="cities__card place-card" onMouseOver={() => {
      mouseOverHandler(offer.id);
    }}
    >
      {offer.isPremium ? <PremiumMark/> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={offer.isFavorite ? 'place-card__bookmark-button--active button' : 'place-card__bookmark-button button'} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={getRatingStyle(offer.rating)}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;