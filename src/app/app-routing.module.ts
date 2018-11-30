import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromComponents from './components';

const routes: Routes = [
  {
    path: '',
    component: fromComponents.HomeComponent
  },
  {
    path: 'jersey',
    loadChildren: '../jersey/jersey.module#JerseyModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
