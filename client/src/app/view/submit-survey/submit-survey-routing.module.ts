import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubmitSurveyComponent } from './submit-survey.component';
import { MainNavComponent } from './../main-nav/main-nav.component'

const routes: Routes = [
  { path: 'submit-survey', component: MainNavComponent,
    children: [
        { path: '', component: SubmitSurveyComponent}
    ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubmitServeyRoutingModule { }