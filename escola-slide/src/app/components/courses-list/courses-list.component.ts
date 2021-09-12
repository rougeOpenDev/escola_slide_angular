import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  @Input() isReadOnly = true;

  private _coursesList: any[];

  constructor() {

    this._coursesList = [];
  }

  ngOnInit(): void {

    this._coursesList = [{

      title: 'Course 1',
      desc: 'Douse 1 of 5',
      prof: 'Cabeleira',
      img: ''
    },{

      title: 'Course 2',
      desc: 'Douse 2 of 5',
      prof: 'Cabeleira',
      img: ''
    },{

      title: 'Course 2',
      desc: 'Douse 2 of 5',
      prof: 'Cabeleira',
      img: ''
    }];
  }

  get coursesList() {

    return this._coursesList;
  }
}
