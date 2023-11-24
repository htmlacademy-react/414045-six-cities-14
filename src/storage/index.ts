import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer.ts';
import {createApi} from '../api.ts';
import {redirect} from '../middlewares/redirect.ts';

const api = createApi();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});
