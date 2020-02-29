import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminStatsComponent } from './admin-stats.component';
import { AdminStatsRoutingModule } from './admin-stats-routing.module'
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge'; 
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  imports: [
    CommonModule,
    AdminStatsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    FlexLayoutModule,
    MatCardModule,
    MatDividerModule,
    MatBadgeModule,
    MatDialogModule
  ],
  exports: [
    AdminStatsComponent
  ],
  declarations: [
    AdminStatsComponent
  ],
  providers: [],
})
export class AdminStatsModule { }