import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { StoreComponent } from './components/store/store.component';
import { UserCourseDetailsComponent } from './components/user-course-details/user-course-details.component';
import { UserCoursesListComponent } from './components/user-courses-list/user-courses-list.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: 'home',
    component: UserDashboardComponent
  },
  {
    path: 'store',
    component: StoreComponent,
  },
  {
    path: 'courses',
    component: CoursesListComponent,
  },
  {
    path: 'courses/:course',
    component: CourseDetailsComponent,
  },
  {
    path: 'user/:user/courses',
    component: UserCoursesListComponent,
  },
  {
    path: 'user/:user/courses/:course',
    component: UserCourseDetailsComponent,
  },
  {
    path: 'user/:user',
    component: UserComponent,
  },
  { path: '**', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
