import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YouTubePlayerModule } from '@angular/youtube-player';
import {
  NbActionsModule,
  NbButtonModule,
  NbIconModule,
  NbLayoutModule,
  NbSidebarModule,
  NbThemeModule,
  NbUserModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { StoreComponent } from './components/store/store.component';
import { UserCourseDetailsComponent } from './components/user-course-details/user-course-details.component';
import { UserCoursesListComponent } from './components/user-courses-list/user-courses-list.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserComponent } from './components/user/user.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent,
    CourseDetailsComponent,
    UserDashboardComponent,
    UserCoursesListComponent,
    StoreComponent,
    UserComponent,
    UserCourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,

    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbButtonModule,
    NbSidebarModule.forRoot(),
    NbActionsModule,
    NbIconModule,
    NbUserModule,
    NbEvaIconsModule,

    YouTubePlayerModule,

    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
