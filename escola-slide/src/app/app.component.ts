import { Component, HostListener } from '@angular/core';

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

  sidebarVisible: boolean = false;
  isMobile: boolean = window.innerWidth <= 768;

  currentTheme: string = 'arya-blue';

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

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = event.target.innerWidth <= 768;
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  navigateTo(route: string) {
    // Implementar navegação para a rota especificada
  }

  toggleTheme() {
    const themes = ['arya-blue', 'md-light-indigo', 'lara-light-blue'];
    const currentIndex = themes.indexOf(this.currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    this.currentTheme = themes[nextIndex];
    this.changeTheme(this.currentTheme);
  }

  changeTheme(theme: string) {
    const themeLink = document.getElementById('app-theme') as HTMLLinkElement;
    themeLink.href = `assets/themes/${theme}/theme.css`;
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
