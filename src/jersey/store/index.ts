import { ActionReducer, MetaReducer, ActionReducerMap } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { reducer as jerseyReducer } from './reducers';
import { Jersey } from '../models/jersey';

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function(state: AppState, action: any): AppState {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

interface AppState {
  jersey: Jersey;
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger]
  : [];

export const reducers: ActionReducerMap<AppState> = {
  jersey: jerseyReducer
};

export * from './reducers';
