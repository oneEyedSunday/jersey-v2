import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Jersey as JerseyModel } from '../models/jersey';
import * as jerseyReducer from '../store/reducers';
import * as fromActions from '../store/actions';
import svgs from '../../assets/jersey_svgs';

@Component({
  selector: 'app-jersey-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit, OnDestroy {
  jerseyState$: Observable<JerseyModel>;
  private jerseyStateSubscription: Subscription;
  jersey: JerseyModel;
  templates: any[];
  badges: any[];
  constructor(private store: Store<JerseyModel>) {
    // or store.pipe(select('jersey'))
    this.jerseyState$ = store.pipe(select(jerseyReducer.getJersey));
    this.templates = svgs.filter(svg => svg.type === 'template');
    this.badges = svgs.filter(svg => svg.type === 'badge');
  }

  ngOnInit() {
    this.jerseyStateSubscription = this.jerseyState$.subscribe(state => {
      console.log(state);
      this.jersey = state;
    });
  }

  ngOnDestroy() {
    this.jerseyStateSubscription.unsubscribe();
  }

  selectTemplateEventHandler(templateName: string) {
    this.store.dispatch({
      type: fromActions.SELECT_TEMPLATE,
      payload: templateName
    });
  }

  selectFontEventHandler(fontName: string) {
    this.store.dispatch({
      type: fromActions.SELECT_FONT,
      payload: fontName
    });
  }

  selectNumberEventHandler(number: string | number) {
    number = typeof number === 'number' ? number.toString() || '' : number;
    this.store.dispatch({
      type: fromActions.SELECT_NUMBER,
      payload: number
    });
  }

  selectTextEventHandler(text: string) {
    this.store.dispatch({
      type: fromActions.SELECT_TEXT,
      payload: text
    });
  }

  selectPrimaryColorEventHandler(color: string) {
    this.store.dispatch({
      type: fromActions.SELECT_PRI_COLOR,
      payload: color
    });
  }

  selectSecondaryColorEventHandler(color: string) {
    this.store.dispatch({
      type: fromActions.SELECT_SEC_COLOR,
      payload: color
    });
  }

  selectBadgeEventHandler(badge: string) {
    this.store.dispatch({
      type: fromActions.SELECT_BADGE,
      payload: badge
    });
  }

  selectBadgePositionEventHandler(position: string) {
    this.store.dispatch({
      type: fromActions.SELECT_BADGE_POSITION,
      payload: position
    });
  }

}
