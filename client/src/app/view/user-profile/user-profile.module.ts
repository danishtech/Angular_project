import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserProfileComponent } from './user-profile.component';
import { UserProfileRoutingModule } from './user-profile-routing.module'
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge'; 


@NgModule({
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    FlexLayoutModule,
    MatCardModule,
    MatDividerModule,
    MatBadgeModule
  ],
  exports: [
    UserProfileComponent
  ],
  declarations: [
    UserProfileComponent
  ],
  providers: [],
})
export class UserProfileModule { }