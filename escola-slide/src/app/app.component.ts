import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'escola-slide';

  private _menuPosition;

  private _tooltipPosition;
  private _tooltipShowDelay: number;
  private _tooltipHideDelay: number;

  constructor() {

    this._menuPosition = 'below';

    this._tooltipPosition = 'after';
    this._tooltipShowDelay = 600;
    this._tooltipHideDelay = 600;
  }

  get menuPosition() {

    return this._menuPosition;
  }

  get tooltipPosition() {

    return this._tooltipPosition;
  }

  get tooltipShowDelay() {

    return this._tooltipShowDelay;
  }

  get tooltipHideDelay() {

    return this._tooltipHideDelay;
  }

  onClick() {

  }

  sair() {

  }

  onHomeClick() {

  }

  onDashboardClick() {

  }

  onSearchClick() {

  }

  onSettingsClick() {

  }
}
