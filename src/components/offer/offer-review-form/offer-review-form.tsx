import {ChangeEvent, SyntheticEvent, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks/hooks.ts';
import {addReviewAction} from '../../../store/api-action.ts';
import {NewReviewData} from '../../../types/review.ts';
import {getAuthInfo} from '../../../store/auth/auth-selector.ts';
import {getIsLoadingForm, getLoadingFormStatus} from '../../../store/loading/loading-selector.ts';
import {LoadingStatus} from '../../../consts.ts';
import {setLoadingFormStatus} from '../../../store/loading/loading-slice.ts';

const MIN_LENGTH_COMMENT = 50;
const MAX_LENGTH_COMMENT = 300;

type FormData = {
    rating: string;
    review: string;
}

type OfferReviewFormProps = {
  offerId: number;
}

function OfferReviewForm({offerId}: OfferReviewFormProps) {
  const dispatch = useAppDispatch();
  const authInfo = useAppSelector(getAuthInfo);
  const isLoadingForm = useAppSelector(getIsLoadingForm);
  const loadingFormStatus = useAppSelector(getLoadingFormStatus);
  const [formData, setFormData] = useState<FormData>({
    rating: '',
    review: ''
  });

  useEffect(() => {
    if (loadingFormStatus === LoadingStatus.Success) {
      setFormData({rating: '', review: ''});
      dispatch(setLoadingFormStatus({loadingFormStatus: LoadingStatus.None}));
    }
  }, [loadingFormStatus]);

  const isSubmitActive = () => formData.rating.length !== 0 && formData.review.length > MIN_LENGTH_COMMENT;

  const fieldChangeHandler = (evt: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const submitHandler = (evt: SyntheticEvent) => {
    evt.preventDefault();

    if (!authInfo) {
      return;
    }

    const reviewData: NewReviewData = {
      offerId: offerId,
      comment: formData.review,
      rating: Number(formData.rating),
    };

    dispatch(addReviewAction(reviewData));
  };

  return (
    <form onSubmit={submitHandler} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input onChange={fieldChangeHandler} className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" disabled={isLoadingForm}/>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={fieldChangeHandler} className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" disabled={isLoadingForm}/>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={fieldChangeHandler} className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" disabled={isLoadingForm}/>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={fieldChangeHandler} className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" disabled={isLoadingForm}/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={fieldChangeHandler} className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" disabled={isLoadingForm}/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea onChange={fieldChangeHandler} value={formData.review} minLength={MIN_LENGTH_COMMENT} maxLength={MAX_LENGTH_COMMENT} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" disabled={isLoadingForm}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                    To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isSubmitActive() || isLoadingForm}>Submit</button>
      </div>
    </form>
  );
}

export default OfferReviewForm;
