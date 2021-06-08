import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { SlotsComponent } from '../../pages/slots/slots.component';
import { MapComponent } from '../../pages/map/map.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UserComponent } from '../../pages/user/user.component';
import { VehiclesComponent } from '../../pages/vehicles/vehicles.component';
import { SettingsComponent } from '../../pages/settings/settings.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'slots', component: SlotsComponent },
  { path: 'maps', component: MapComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'user', component: UserComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'settings', component: SettingsComponent },
];
