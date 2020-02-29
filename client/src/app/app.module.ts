import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './view/login/login.module';
import { Routes, RouterModule } from '@angular/router';
import { DashboardModule } from './view/dashboard/dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './view/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RegistrationComponent } from './view/registration/registration.component';
import { RegistrationModule } from './view/registration/registration.module';
import { ApprovedEventsModule } from './view/approved-events/approved-events.module';
import { UserProfileModule } from './view/user-profile/user-profile.module';
import { SubmitEventsModule } from './view/submit-events/submit-events.module';
import { PasswordChangeModule } from './view/password-change/password-change.module';
import { LiveEventsModule } from './view/live-eventsdetail/live-eventsdetail.module';
import { UpcomingEventsModule } from './view/upcoming-events-detail/upcoming-events-detail.module';
import { CompletedEventsModule } from './view/completed-event-details/completed-event-details.module';
import { SubmitSurveyModule } from './view/submit-survey/submit-survey.module';
import { CompletedSurveyModule } from './view/completed-survey/completed-survey.module';
import { AdminLayoutComponent } from './view/admin/admin-layout/admin-layout.component';
import { AdminDashboardModule } from './view/admin/admin-dashboard/admin-dashboard.module';
import { HttpClientModule } from '@angular/common/http';
import { PendingApprovalModule } from './view/admin/pending-approval/pending-approval.module';
import { AdminStatsModule } from './view/admin/admin-stats/admin-stats.module';
import { ContactModule } from './view/contact/contact.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'register', 
    component: RegistrationComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    AdminLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes,
      { enableTracing: true }),
    LoginModule,
    RegistrationModule,
    DashboardModule,
    UserProfileModule,
    ApprovedEventsModule,
    SubmitEventsModule,
    PasswordChangeModule,
    LiveEventsModule,
    UpcomingEventsModule,
    CompletedEventsModule,
    SubmitSurveyModule,
    CompletedSurveyModule,
    BrowserAnimationsModule,
    AdminDashboardModule,
    AdminStatsModule,
    PendingApprovalModule,
    ContactModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
