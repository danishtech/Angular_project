import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MainNavComponent } from '../main-nav/main-nav.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';

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
    MatSidenavModule
  ],
  exports: [
    MainNavComponent,
  ],
  declarations: [
    MainNavComponent,
    // UserProfileComponent
  ]
})
export class LayoutModule { }