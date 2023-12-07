import {ReactElement, useState} from 'react';
import {Offer} from '../../../types/offer.ts';
import PremiumMark from '../../premium-mark/premium-mark.tsx';
import {Link} from 'react-router-dom';
import {useAppDispatch} from '../../../hooks/hooks.ts';
import {toggleFavoriteOfferAction} from '../../../store/api-action.ts';
import classNames from 'classnames';
import {getRatingStyle} from '../../../utils/utils.ts';

type FavoritesCardProps = {
  offer: Offer;
}

function FavoritesCard({offer}:FavoritesCardProps):ReactElement {
  const dispatch = useAppDispatch();
  const [isFavorite, setIsFavorite] = useState(offer.isFavorite);

  const handleClickFavoriteButton = () => {
    setIsFavorite(!isFavorite);
    dispatch(toggleFavoriteOfferAction({offerId: offer.id, status: Number(!isFavorite)}));
  };

  return (
    <article className="favorites__card place-card">
      {offer.isPremium ? <PremiumMark/> : ''}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="Place image"/>
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={classNames(
            'place-card__bookmark-button',
            'button',
            {'place-card__bookmark-button--active': isFavorite}
          )} type="button" onClick={handleClickFavoriteButton}
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
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default FavoritesCard;
