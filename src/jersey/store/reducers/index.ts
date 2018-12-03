import { createFeatureSelector } from '@ngrx/store';
import * as fromActions from '../actions';
import { InitialJersey, Jersey as JerseyModel} from '../../models/jersey';

export function reducer(state: JerseyModel = InitialJersey, action: fromActions.Actions): JerseyModel {
  switch (action.type) {
    case fromActions.SELECT_TEXT:
    return Object.assign({}, state, {
      text: action.payload
    });

    case fromActions.SELECT_FONT:
    return Object.assign({}, state, {
      font: action.payload
    });

    case fromActions.SELECT_NUMBER:
    return Object.assign({}, state, {
      number: action.payload
    });

    case fromActions.SELECT_BADGE:
    return Object.assign({}, state, {
      badge: action.payload
    });

    case fromActions.SELECT_BADGE_POSITION:
    return Object.assign({}, state, {
      badge_position: action.payload
    });

    case fromActions.SELECT_TEMPLATE:
    return Object.assign({}, state, {
      base: action.payload
    });

    case fromActions.SELECT_PRI_COLOR:
    return Object.assign({}, state, {
      pricolor: action.payload
    });

    case fromActions.SELECT_SEC_COLOR:
    return Object.assign({}, state, {
      seccolor: action.payload
    });

    case fromActions.COMPLETE:
    return Object.assign({}, state, {
      complete: action.payload
    });

    case fromActions.RESET:
    return Object.assign({}, state, InitialJersey);

    default:
    return InitialJersey;
  }
}

export const getJersey = createFeatureSelector<JerseyModel>('jersey');
