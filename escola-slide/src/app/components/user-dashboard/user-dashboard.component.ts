import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

import { connect, getInstanceByDom } from 'echarts';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  readonly CHART_1_REF = 'chart1';

  private _userDash: User | undefined;

  private _optionsChart : any;
  private _showChart: boolean;

  private _chartIndicators: any[];
  private _chartValueCompleted: number[];;
  private _chartValueTotal: number[];

  constructor(private userService: UserService) {

    this._showChart = false;

    this._chartIndicators = [];
    this._chartValueCompleted = [];
    this._chartValueTotal = [];

    this._optionsChart = {
      color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
      title: {
        text: 'Horas Concluidas por Curso Inscrito',

      },
      legend: {},
      radar: [
        {
          indicator: [],
          center: ['50%', '50%'],
          radius: 120,
          startAngle: 90,
          splitNumber: 4,
          shape: 'circle',
          axisName: {
            formatter: '{value}',
            color: '#428BD4'
          },
          splitArea: {
            areaStyle: {
              color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
              shadowColor: 'rgba(0, 0, 0, 0.2)',
              shadowBlur: 10
            }
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(211, 253, 250, 0.8)'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(211, 253, 250, 0.8)'
            }
          }
        }
      ],
      series: [
        {
          type: 'radar',
          emphasis: {
            lineStyle: {
              width: 4
            }
          },
          data: [
            {
              value: [],
              name: 'Horas Totais'
            },
            {
              value: [],
              name: 'Horas Assistidas'
            }
          ]
        }
      ]
    };
  }

  ngOnInit(): void {

    this.userService.getUserDashData()
      .then((user: any) => {

        if (user) {

          this._userDash = user;

          this.prepareChartsOptions(user);
        }
      });
  }

  private prepareChartsOptions(user: User) {

    if (user.courses && user.courses.length > 0) {

      user.courses.forEach(course => {

        this._chartIndicators.push({
          'text': course.label
        });

        if (course.status) {

          this._chartValueCompleted.push(course.status?.watchedHours);
          this._chartValueTotal.push(course.status?.totalHours);
        }
      });

      this.options.radar[0].indicator = this._chartIndicators;
      this.options.series[0].data[0].value = this._chartValueTotal;
      this.options.series[0].data[1].value = this._chartValueCompleted;

      this.refreshChart();
    }
  }

  private refreshChart() {

    this._showChart = true;

    const chartElement1 = document.getElementById(this.CHART_1_REF);
    if (chartElement1) {

      const chart1 = getInstanceByDom(chartElement1);
      connect([chart1]);
    }
  }

  get showChart() {

    return this._showChart;
  }

  get options() {

    return this._optionsChart;
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
