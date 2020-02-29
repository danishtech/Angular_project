import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';
import { MainNavComponent } from './../main-nav/main-nav.component'

const routes: Routes = [
  { path: 'contact', component: MainNavComponent,
    children: [
        { path: '', component: ContactComponent}
    ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }