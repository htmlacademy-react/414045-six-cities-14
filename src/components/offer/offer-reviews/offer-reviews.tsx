import {ReactElement} from 'react';
import OfferReviewForm from '../offer-review-form/offer-review-form.tsx';
import {Review} from '../../../types/review.ts';
import OfferReview from '../offer-review/offer-review.tsx';
import {useAppSelector} from '../../../hooks/hooks.ts';
import {AuthorizationStatus} from '../../../consts.ts';
import {getAuthorizationStatus} from '../../../store/auth/auth-selector.ts';

type OfferReviewsProps = {
  offerId: number;
  reviews: Review[];
}

function OfferReviews({offerId, reviews}: OfferReviewsProps):ReactElement {
  const auth = useAppSelector(getAuthorizationStatus);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => <OfferReview key={review.id} review={review}/>)}
      </ul>
      {auth === AuthorizationStatus.Auth ? <OfferReviewForm offerId={offerId}/> : null}
    </section>
  );
}

export default OfferReviews;
