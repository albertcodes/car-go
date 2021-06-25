import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'icon-components',
    class: ''
  },
  {
    path: '/slots',
    title: 'Parking Slots',
    icon: 'icon-delivery-fast',
    class: ''
  },
  {
    path: '/vehicles',
    title: 'Manage Vehicles',
    icon: 'icon-align-left-2',
    class: ''
  },
  {
    path: '/user',
    title: 'Profile',
    icon: 'icon-single-02',
    class: ''
  },
  {
    path: '/notifications',
    title: 'Notifications',
    icon: 'icon-bell-55',
    class: ''
  },
  {
    path: '/settings',
    title: 'Settings',
    icon: 'icon-settings-gear-63',
    class: ''
  },
  {
    path: '/close',
    title: 'Close App',
    icon: 'icon-button-power',
    class: ''
  },
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
