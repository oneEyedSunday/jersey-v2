import { Observable, Subscription } from 'rxjs';
import { Injectable } from '@angular/core';
import Svgs from '../../assets/jersey_svgs';
import { Store, select } from '@ngrx/store';
import { getJersey } from '../store';
import { Jersey } from '../models/jersey';
import { ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SvgEditorService {
  jerseyState$: Observable<Jersey>;
  jerseyStateSubscription: Subscription;
  jersey: Jersey;
  svg: any;
  constructor(private store: Store<any>) {
    this.jerseyState$ = store.pipe(select(getJersey));
    this.jerseyStateSubscription = this.jerseyState$.subscribe(state => this.jersey = state);
  }

  get sourceFromTemplateName(): string {
    return Svgs.filter(svg => svg.title === this.jersey.base)[0].src || '';
  }

  setReferenceToSvg(svgRef: ElementRef) {
    this.svg = svgRef;
    this.svg = this.svg.childNodes[0];
    // this.svg = this.svg.nativeElement.contentDocument.childNodes[0];
    // console.log(this.svg);
    // console.log(this.svg.contentDocument);
    // console.log(this.svg.nativeElement);
    // console.log(this.svg.nativeElement.contentDocument);
    // console.log(this.svg.contentDocument.documentElement);
    // console.log(this.svg.contentDocument.getElementsByTagName('svg'));
  }

  repaintSvg() {
    if (this.jersey.text) { this.paintText('text'); }
  }

  paintText(type: string) {
    // console.log(this.svg);
    console.log(this.svg.children);
    const children: Array<any> = Array.from(this.svg.children);
    const toReplace = type === 'kit_number' ? 'kitn' : 'sponsor';
    console.log(children);
  }
}
