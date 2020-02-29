import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompletedSurveyComponent } from './completed-survey.component';
import { MainNavComponent } from './../main-nav/main-nav.component'

const routes: Routes = [
  { path: 'completed-survey', component: MainNavComponent,
    children: [
        { path: '', component: CompletedSurveyComponent}
    ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompletedServeyRoutingModule { }