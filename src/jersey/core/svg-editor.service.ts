import { Observable, Subscription } from 'rxjs';
import { Injectable } from '@angular/core';
import Svgs from '../../assets/jersey_svgs';
import { Store, select } from '@ngrx/store';
import { getJersey } from '../store';
import { Jersey } from '../models/jersey';

@Injectable({
  providedIn: 'root'
})
export class SvgEditorService {
  jerseyState$: Observable<Jersey>;
  jerseyStateSubscription: Subscription;
  jersey: Jersey;
  constructor(private store: Store<any>) {
    this.jerseyState$ = store.pipe(select(getJersey));
    this.jerseyStateSubscription = this.jerseyState$.subscribe(state => this.jersey = state);
  }

  get sourceFromTemplateName(): any {
    return Svgs.filter(svg => svg.title === this.jersey.base)[0];
  }

  get badgeUrlFromBadgeName(): string {
    const badge = Svgs.filter(svg => svg.title === this.jersey.badge)[0];
    if (badge) {
      return badge.src;
    } else { return ''; }
  }
}
