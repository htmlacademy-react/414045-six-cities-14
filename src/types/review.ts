import {User} from './user.ts';

export type Review = {
  comment: string;
  date: Date;
  id: number;
  rating: number;
  user: User;
}

export type NewReviewData = {
  offerId: number;
  comment: string;
  rating: number;
}
