import {store} from '../store';
import {Action, ThunkDispatch} from '@reduxjs/toolkit';
import {createApi} from '../api.ts';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createApi>, Action>;
