import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { NgxEchartsModule } from 'ngx-echarts';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { StepsModule } from 'primeng/steps';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { PrimeNGConfig } from 'primeng/api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { DestaqueInstaComponent } from './components/home/destaque-insta/destaque-insta.component';
import { TopPrincipalMenuComponent } from './components/navigation/top-principal-menu/top-principal-menu.component';
import { StoreComponent } from './components/store/store.component';
import { TrainConfigComponent } from './components/train/train-config/train-config.component';
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
    DestaqueInstaComponent,
    TrainConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    YouTubePlayerModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    ButtonModule,
    TableModule,
    CardModule,
    StepsModule,
    MenuModule,
    PanelModule
  ],
  providers: [PrimeNGConfig],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(private primengConfig: PrimeNGConfig) {
    this.primengConfig.ripple = true;
  }
}
