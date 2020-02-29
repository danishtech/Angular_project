import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpcomingEventsDetailComponent } from './upcoming-events-detail.component';
import { MainNavComponent } from './../main-nav/main-nav.component'

const routes: Routes = [
  { path: 'upcoming-events', component: MainNavComponent,
    children: [
        { path: '', component: UpcomingEventsDetailComponent}
    ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpcomingEventsRoutingModule { }