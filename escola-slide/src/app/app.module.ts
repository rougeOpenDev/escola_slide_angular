import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { UserCoursesListComponent } from './components/user-courses-list/user-courses-list.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { StoreComponent } from './components/store/store.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent,
    CourseDetailsComponent,
    UserDashboardComponent,
    UserCoursesListComponent,
    StoreComponent,
    UserComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    FlexLayoutModule,

    HttpClientModule,
    MatProgressBarModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    MatToolbarModule,
    MatTooltipModule,
    MatCardModule,
    MatSliderModule,
    MatChipsModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
