import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getJersey } from '../store';
import { RESET } from '../store/actions';
import { Jersey as JerseyModel } from '../models/jersey';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss']
})
export class CompleteComponent implements OnInit, OnDestroy {
  jersey: JerseyModel;
  jerseyState$: Observable<JerseyModel>;
  constructor(private store: Store<JerseyModel>) {
    this.jerseyState$ = store.pipe(select(getJersey));
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

  newJersey() {
    this.store.dispatch({
      type: RESET
    });
  }

}
