import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMenuItem, NbMenuService } from '@nebular/theme';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';

@Component({
  selector: 'app-top-principal-menu',
  templateUrl: './top-principal-menu.component.html',
  styleUrls: ['./top-principal-menu.component.scss']
})
export class TopPrincipalMenuComponent implements OnInit, OnDestroy {

  private destroy$;

  selectedItem: string;

  constructor(private menuService: NbMenuService) {

    this.destroy$ = new Subject<void>();
    this.selectedItem = 'home';
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  menuItems: NbMenuItem[] = [
    { title: 'Home', icon: 'home-outline', link: '/', home: true },
    {
      title: 'História',
      icon: 'book-outline',
      children: [
        { title: 'História 2', link: '/historia/2' },
        { title: 'História 3', link: '/historia/3' },
      ],
    },
    { title: 'Nós', icon: 'people-outline', link: '/nos' },
    { title: 'Apoio', icon: 'help-outline', link: '/apoio' },
  ];

  items: NbMenuItem[] = [
    {
      title: 'Home',
      link: '/home',
    },
    {
      title: 'Dashboard',
      link: '/dashboard',
    },
    {
      title: 'Search',
      /*children: [
        {
          title: 'Advanced Search',
          link: '/search/advanced',
        },
        {
          title: 'Search by Category',
          link: '/search/category',
        },
      ],*/
    },
    {
      title: 'Settings',
      link: '/settings',
    },
  ];

  addMenuItem() {
    this.menuService.addItems([{
      title: '@nebular/theme',
      target: '_blank',
      icon: 'plus-outline',
      url: 'https://github.com/akveo/ngx-admin',
    }], 'menu');
  }

  collapseAll() {
    this.menuService.collapseAll('menu');
  }

  navigateHome() {
    this.menuService.navigateHome('menu');
  }

  getSelectedItem() {
    this.menuService.getSelectedItem('menu')
      .pipe(takeUntil(this.destroy$))
      .subscribe( (menuBag) => {
        this.selectedItem = menuBag.item.title;
      });
  }

  ngOnInit() {
  }

}
