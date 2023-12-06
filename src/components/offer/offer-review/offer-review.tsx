import {Review} from '../../../types/review.ts';
import dayjs from 'dayjs';
import {getRatingStyle} from '../../../utils.ts';

type OfferReviewProps = {
  review: Review;
}

function OfferReview({review}: OfferReviewProps) {
  const date = dayjs(review.date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">{review.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={getRatingStyle(review.rating)}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={date.format('YYYY-MM-DD')} data-testid="reviews_time">{date.format('MMMM YYYY')}</time>
      </div>
    </li>
  );
}

export default OfferReview;
