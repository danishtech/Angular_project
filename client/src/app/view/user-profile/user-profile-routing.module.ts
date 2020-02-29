import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfileComponent } from './user-profile.component';
import { MainNavComponent } from './../main-nav/main-nav.component'

const routes: Routes = [
  { path: 'userProfile', component: MainNavComponent,
    children: [
        { path: '', component: UserProfileComponent}
    ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }