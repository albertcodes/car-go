import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notifications',
  templateUrl: 'notifications.component.html'
})
export class NotificationsComponent implements OnInit {
  staticAlertClosed  = false;
  staticAlertClosed1 = false;
  staticAlertClosed2 = false;
  staticAlertClosed3 = false;
  staticAlertClosed4 = false;
  staticAlertClosed5 = false;
  staticAlertClosed6 = false;
  staticAlertClosed7 = false;

  constructor(private toastr: ToastrService) {}

  showNotification(from, align){
    this.toastr.info('<span class="theme-icons icon-bell-55" [data-notify]="icon"></span>Notifications category changed.', 'Notification from Car-Go', {
      disableTimeOut: false,
      closeButton: true,
      enableHtml: true,
      toastClass: 'alert alert-info alert-with-icon',
      positionClass: 'toast-' + from + '-' +  align
    });
  }

  ngOnInit() {}
}
