import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LiveEventsdetailComponent } from './live-eventsdetail.component';
import { LiveEventsRoutingModule } from './live-eventsdetail-routing.module'
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
    LiveEventsRoutingModule,
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
    LiveEventsdetailComponent
  ],
  declarations: [
    LiveEventsdetailComponent
  ],
  providers: [],
})
export class LiveEventsModule { }