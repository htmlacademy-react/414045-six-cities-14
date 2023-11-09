import {ReactElement} from 'react';
import OfferReviewForm from '../offer-review-form/offer-review-form.tsx';
import {Review} from '../../../types/review.ts';
import OfferReview from '../offer-review/offer-review.tsx';

type OfferReviewsProps = {
  reviews: Review[];
}

function OfferReviews({reviews}: OfferReviewsProps):ReactElement {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => <OfferReview key={review.id} review={review}/>)}
      </ul>
      <OfferReviewForm/>
    </section>
  );
}

export default OfferReviews;
