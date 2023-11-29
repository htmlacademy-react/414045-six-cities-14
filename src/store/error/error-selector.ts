import {State} from '../../types/state.ts';
import {Error} from '../../types/error.ts';
import {StoreNameSpace} from '../../consts.ts';

export const getError = (state: State): Error => state[StoreNameSpace.Error].error;
