import {RATING_COEFFICIENT} from './consts.ts';

function getRatingStyle(rating: number) {
  return {width: `${rating * RATING_COEFFICIENT}%`};
}

export {getRatingStyle};
