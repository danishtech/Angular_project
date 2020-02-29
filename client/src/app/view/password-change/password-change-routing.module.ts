import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasswordChangeComponent } from './password-change.component';

const routes: Routes = [
  { path: 'passwordChange',
    component: PasswordChangeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordChangeRoutingModule { }