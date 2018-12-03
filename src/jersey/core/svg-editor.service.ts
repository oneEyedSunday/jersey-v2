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

  get badgeUrlFromBadgeName(): any {
    const badge = Svgs.filter(svg => svg.title === this.jersey.badge)[0];
    if (badge) {
      return badge;
    } else { return ''; }
  }

  base64encoded(node): string {
      const contentAsDom = (new DOMParser()).parseFromString(node.content ? node.content : node, 'text/xml');
      const contentAsSerializedString = (new XMLSerializer()).serializeToString(contentAsDom);
      const data = window.btoa(contentAsSerializedString);
      const defaultEncoding = 'base64';
      return `data:image/svg+xml;${defaultEncoding},${data}`;
  }
}
