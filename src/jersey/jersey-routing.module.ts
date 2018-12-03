import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromContainers from './containers';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: fromContainers.CreateComponent
  },
  {
    path: 'complete',
    component: fromContainers.CompleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JerseyRoutingModule { }
