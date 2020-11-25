import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    rtlTitle: 'لوحة القيادة',
    icon: 'icon-components',
    class: ''
  },
  {
    path: '/icons',
    title: 'Icons',
    rtlTitle: 'الرموز',
    icon: 'icon-atom',
    class: ''
  },
  {
    path: '/maps',
    title: 'Maps',
    rtlTitle: 'خرائط',
    icon: 'icon-pin',
    class: ''
  },
  {
    path: '/notifications',
    title: 'Notifications',
    rtlTitle: 'إخطارات',
    icon: 'icon-bell-55',
    class: ''
  },

  {
    path: '/user',
    title: 'User Profile',
    rtlTitle: 'ملف تعريفي للمستخدم',
    icon: 'icon-single-02',
    class: ''
  },
  {
    path: '/tables',
    title: 'Table List',
    rtlTitle: 'قائمة الجدول',
    icon: 'icon-puzzle-10',
    class: ''
  },
  {
    path: '/typography',
    title: 'Typography',
    rtlTitle: 'طباعة',
    icon: 'icon-align-center',
    class: ''
  },
  {
    path: '/rtl',
    title: 'RTL Support',
    rtlTitle: 'ار تي ال',
    icon: 'icon-world',
    class: ''
  }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  private listTitles: any[];
  location: Location;

  constructor(
    location: Location,
  ) {
    this.location = location;
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }

  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }

    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return 'Dashboard';
  }
}
