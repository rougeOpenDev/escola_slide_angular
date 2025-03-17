import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ThemeService } from './services/theme.service';
import { Router } from '@angular/router';

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

  private themes = ['rhea', 'mira', 'nano', 'soho-dark', 'soho-light', 'fluent-light', 'arya-blue', 'arya-orange', 'arya-green', 'arya-purple', 'md-light-indigo', 'md-dark-indigo', 'md-light-deeppurple', 'md-dark-deeppurple', 'viva-light', 'viva-dark', 'tailwind-light', 'saga-blue', 'saga-green', 'saga-orange', 'saga-purple', 'vela-blue', 'vela-green', 'vela-orange', 'vela-purple', 'aura-dark-amber', 'aura-dark-blue', 'aura-dark-cyan', 'aura-dark-green', 'aura-dark-indigo', 'aura-dark-lime', 'aura-dark-noir', 'aura-dark-pink', 'aura-dark-purple', 'aura-dark-teal', 'aura-light-amber', 'aura-light-blue', 'aura-light-cyan', 'aura-light-green', 'aura-light-indigo', 'aura-light-lime', 'aura-light-noir', 'aura-light-pink', 'aura-light-purple', 'aura-light-teal', 'nova-accent', 'nova-alt', 'nova', 'bootstrap4-dark-blue', 'bootstrap4-dark-purple', 'bootstrap4-light-blue', 'bootstrap4-light-purple', 'luna-amber', 'luna-blue', 'luna-green', 'luna-pink'];


  currentTheme: string = 'arya-blue';

  constructor(private themeService: ThemeService, private messageService: MessageService, private router: Router) {

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

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  navigateTo(route: string) {
    // Implementar navegação para a rota especificada
  }

  toggleTheme() {

    const currentIndex = this.themes.indexOf(this.currentTheme);
    const nextIndex = (currentIndex + 1) % this.themes.length;
    this.currentTheme = this.themes[nextIndex];

    this.themeService.switchTheme(this.currentTheme);

    this.messageService.add({severity:'success', summary:'Nome do novo tema', detail: this.currentTheme});
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

  navigateToHome() {

    this.router.navigate(['/home']);
  }

  navigateToTrain() {
    this.router.navigate(['/train']);
  }

  navigateToTricks() {
    this.router.navigate(['/tricks']);
  }
}
