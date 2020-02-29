import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveEventsdetailComponent } from './live-eventsdetail.component';
import { MainNavComponent } from './../main-nav/main-nav.component'

const routes: Routes = [
  { path: 'live-events', component: MainNavComponent,
    children: [
        { path: '', component: LiveEventsdetailComponent}
    ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiveEventsRoutingModule { }