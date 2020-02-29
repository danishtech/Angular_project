import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ApprovedEventsComponent } from './approved-events.component';
import { ApprovedEventsRoutingModule } from './approved-events-routing.module'
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge'; 
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  imports: [
    CommonModule,
    ApprovedEventsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    FlexLayoutModule,
    MatCardModule,
    MatDividerModule,
    MatBadgeModule,
    MatStepperModule,
    MatFormFieldModule
  ],
  exports: [
    ApprovedEventsComponent
  ],
  declarations: [
    ApprovedEventsComponent
  ],
  providers: [],
})
export class ApprovedEventsModule { }