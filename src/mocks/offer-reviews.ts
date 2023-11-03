import {Review} from '../types/review.ts';

export const offerReviews: Review[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: new Date('Thu Nov 02 2021 20:13:07 GMT+0200 (Восточная Европа, стандартное время)'),
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 1,
      isPro: false,
      name: 'Hans'
    }
  },
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: new Date('Thu Nov 02 2023 20:13:07 GMT+0200 (Восточная Европа, стандартное время)'),
    id: 2,
    rating: 5,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 1,
      isPro: false,
      name: 'Anna'
    }
  },
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: new Date('Thu Nov 02 2022 20:13:07 GMT+0200 (Восточная Европа, стандартное время)'),
    id: 3,
    rating: 2,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 1,
      isPro: false,
      name: 'Oliver'
    }
  },
];
