import {User} from './user.ts';

export type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: User;
}

export type NewReviewData = {
  offerId: string;
  comment: string;
  rating: number;
}
