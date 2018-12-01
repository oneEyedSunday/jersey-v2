import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { JerseyRoutingModule } from './jersey-routing.module';
import { reducers, metaReducers } from './store';
import * as fromContainers from './containers';
import * as fromComponents from './components';
import { SafePipe } from './core/safe.pipe';
import { SvgEditorService } from './core/svg-editor.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    JerseyRoutingModule,
    StoreModule.forRoot(reducers, {metaReducers})
  ],
  declarations: [
    ...fromContainers.containers,
    ...fromComponents.components,
    SafePipe,
  ],
  providers: [
    SvgEditorService,
  ]
})
export class JerseyModule { }
