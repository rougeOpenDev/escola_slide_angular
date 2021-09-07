import { Component, OnInit } from '@angular/core';

import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'escola-slide';

  private _tooltipPosition: TooltipPosition;
  private _tooltipShowDelay: number;
  private _tooltipHideDelay: number;

  constructor() {

    this._tooltipPosition = 'after';
    this._tooltipShowDelay = 600;
    this._tooltipHideDelay = 600;
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
}
