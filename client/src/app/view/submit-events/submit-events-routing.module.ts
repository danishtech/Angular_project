import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubmitEventsComponent } from './submit-events.component';
import { MainNavComponent } from './../main-nav/main-nav.component'

const routes: Routes = [
  { path: 'submit-events', component: MainNavComponent,
    children: [
        { path: '', component: SubmitEventsComponent}
    ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubmitEventsRoutingModule { }