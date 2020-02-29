import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PasswordChangeComponent } from './password-change.component';
import { PasswordChangeRoutingModule } from './password-change-routing.module'
import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  imports: [
    CommonModule,
    PasswordChangeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
  ],
  exports: [
    PasswordChangeComponent
  ],
  declarations: [
    PasswordChangeComponent
  ],
  providers: [],
})
export class PasswordChangeModule { }