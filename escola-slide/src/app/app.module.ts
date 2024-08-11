import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbLayoutModule,
  NbMenuItem,
  NbMenuModule,
  NbSelectModule,
  NbSidebarModule,
  NbThemeModule,
  NbUserModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { TopPrincipalMenuComponent } from './components/navigation/top-principal-menu/top-principal-menu.component';
import { StoreComponent } from './components/store/store.component';
import { UserCourseDetailsComponent } from './components/user-course-details/user-course-details.component';
import { UserCoursesListComponent } from './components/user-courses-list/user-courses-list.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent,
    CourseDetailsComponent,
    UserDashboardComponent,
    UserCoursesListComponent,
    StoreComponent,
    UserComponent,
    UserCourseDetailsComponent,
    TopPrincipalMenuComponent,
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
    NbMenuModule.forRoot(),  // Importando NbMenuModule,
    NbIconModule,
    NbUserModule,
    NbEvaIconsModule,
    NbCardModule,
    NbSelectModule,

    YouTubePlayerModule,

    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
