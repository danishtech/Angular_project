import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminStatsComponent } from './admin-stats.component';
import { AdminLayoutComponent } from './../admin-layout/admin-layout.component'

const routes: Routes = [
  { path: 'adminStats', component: AdminLayoutComponent,
    children: [
        { path: '', component: AdminStatsComponent}
    ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminStatsRoutingModule { }