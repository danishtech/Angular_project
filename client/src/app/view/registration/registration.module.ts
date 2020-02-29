import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegistrationComponent } from './registration.component';
import { RegistrationRoutingModule } from './registration-routing.module'
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    MatStepperModule,
    MatFormFieldModule
  ],
  exports: [
    RegistrationComponent
  ],
  declarations: [
    RegistrationComponent
  ],
  providers: [],
})
export class RegistrationModule { }