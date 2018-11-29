import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import * as fromComponents from './components';

@NgModule({
  declarations: [
    ...fromComponents.components,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [fromComponents.AppComponent]
})
export class AppModule { }
