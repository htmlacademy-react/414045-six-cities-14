import {User} from './user.ts';

export type Review = {
  comment: string;
  date: Date;
  id: number;
  rating: number;
  user: User;
}
