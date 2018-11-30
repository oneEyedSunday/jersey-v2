import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { JerseyRoutingModule } from './jersey-routing.module';
import { reducers, metaReducers } from './store';


@NgModule({
  imports: [
    CommonModule,
    JerseyRoutingModule,
    StoreModule.forRoot(reducers, {metaReducers})
  ],
  declarations: []
})
export class JerseyModule { }
