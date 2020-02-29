import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendingApprovalComponent } from './pending-approval.component';
import { AdminLayoutComponent } from './../admin-layout/admin-layout.component'

const routes: Routes = [
  { path: 'pendingApproval', component: AdminLayoutComponent,
    children: [
        { path: '', component: PendingApprovalComponent}
    ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PendingApprovalRoutingModule { }