import {PayloadAction} from '@reduxjs/toolkit';
import {Middleware} from 'redux';
import {browserHistory} from '../browser-history.ts';
import {reducer} from '../storage/reducer.ts';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> = () => (next) => (action: PayloadAction<string>) => {
  if (action.type === 'routing/redirectToRoute') {
    browserHistory.push(action.payload);
  }

  return next(action);
};
