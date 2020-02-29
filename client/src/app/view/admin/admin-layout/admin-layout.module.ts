import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { AdminLayoutComponent } from './admin-layout.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatIconModule,
    MatBadgeModule,
    MatSidenavModule,
    HttpClientModule
  ],
  exports: [
    AdminLayoutComponent,
  ],
  declarations: [
    AdminLayoutComponent,
    // UserProfileComponent
  ]
})
export class AdminLayoutModule { }