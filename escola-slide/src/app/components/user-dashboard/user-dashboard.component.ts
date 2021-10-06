import { User } from 'src/app/models/user.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  private _userDash: User | undefined;

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {

    this.userService.getUserDashData()
      .then((user: any) => {

        if (user) {

          this._userDash = user;
        }
      });
  }

  get userDash() {

    return this._userDash;
  }

  valorProgressBarCourse(user?: User) {

    if (user && user.status) {

      if (!user.status.labelWatchedHours) {

        user.status.labelWatchedHours = user.status.watchedHours / user.status.totalHours * 100
      }

      return user.status.labelWatchedHours;
    }

    return 0;
  }

  getClassesString(user?: User) {

    if (user && user.status) {

      if (!user.status.labelAttempedClasses) {

        const stringFinal = 'Aulas Completas: ';
        user.status.labelAttempedClasses = stringFinal + user.status.attempedClasses + ' de ' + user.status.totalClasses;
      }

      return user.status.labelAttempedClasses;
    }

    return '';
  }
}
