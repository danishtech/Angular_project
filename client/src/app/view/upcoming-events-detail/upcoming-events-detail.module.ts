import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UpcomingEventsDetailComponent } from './upcoming-events-detail.component';
import { UpcomingEventsRoutingModule } from './upcoming-events-detail-routing.module'
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
    UpcomingEventsRoutingModule,
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
    UpcomingEventsDetailComponent
  ],
  declarations: [
    UpcomingEventsDetailComponent
  ],
  providers: [],
})
export class UpcomingEventsModule { }