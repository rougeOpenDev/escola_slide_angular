import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { DestaqueInstaComponent } from './components/home/destaque-insta/destaque-insta.component';
import { StoreComponent } from './components/store/store.component';
import { TrainConfigComponent } from './components/train/train-config/train-config.component';
import { TrainConfigSelectComponent } from './components/train/train-config-select/train-config-select.component';
import { TrainConfigPropertiesComponent } from './components/train/train-config-properties/train-config-properties.component';
import { TrainConfigCheckoutComponent } from './components/train/train-config-checkout/train-config-checkout.component';
import { UserCourseDetailsComponent } from './components/user-course-details/user-course-details.component';
import { UserCoursesListComponent } from './components/user-courses-list/user-courses-list.component';
import { UserComponent } from './components/user/user.component';
import { TricksLibComponent } from './components/tricks/tricks-lib/tricks-lib.component';

const routes: Routes = [
  {
    path: 'home',
    component: DestaqueInstaComponent,
  },
  {
    path: 'train',
    component: TrainConfigComponent,
  },
  {
    path: 'train/select',
    component: TrainConfigSelectComponent,
  },
  {
    path: 'train/properties',
    component: TrainConfigPropertiesComponent,
  },
  {
    path: 'train/checkout',
    component: TrainConfigCheckoutComponent,
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
  {
    path: 'tricks',
    component: TricksLibComponent,
  },
  { path: '**', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
