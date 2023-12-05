import {RATING_COEFFICIENT} from './consts.ts';

function getRatingStyle(rating: number) {
  return {width: `${Math.round(rating) * RATING_COEFFICIENT}%`};
}

export {getRatingStyle};
