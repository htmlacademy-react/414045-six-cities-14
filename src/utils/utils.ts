import {Action} from '@reduxjs/toolkit';
import {RATING_COEFFICIENT} from '../consts.ts';

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

export const getRatingStyle = (rating: number) => ({width: `${Math.round(rating) * RATING_COEFFICIENT}%`});
