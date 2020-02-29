import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard.component';
import { AdminLayoutComponent } from './../admin-layout/admin-layout.component'

const routes: Routes = [
  { path: 'adminDashboard', component: AdminLayoutComponent,
    children: [
        { path: '', component: AdminDashboardComponent}
    ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }