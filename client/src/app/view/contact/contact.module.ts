import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module'
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge'; 


@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    FlexLayoutModule,
    MatCardModule,
    MatDividerModule,
    MatBadgeModule
  ],
  exports: [
    ContactComponent
  ],
  declarations: [
    ContactComponent
  ],
  providers: [],
})
export class ContactModule { }