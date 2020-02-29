import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompletedEventDetailsComponent } from './completed-event-details.component';
import { MainNavComponent } from './../main-nav/main-nav.component'

const routes: Routes = [
  { path: 'complete-events', component: MainNavComponent,
    children: [
        { path: '', component: CompletedEventDetailsComponent}
    ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompletedEventsRoutingModule { }