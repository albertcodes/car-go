import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit {
  constructor(private toastr: ToastrService) {}

  ngOnInit() {}

  public displaySaved(from, align) {
    this.toastr.success('<span class="theme-icons icon-bell-55" [data-notify]="icon"></span>Saved', 'Notification from Car-Go', {
      disableTimeOut: false,
      closeButton: true,
      enableHtml: true,
      toastClass: 'alert alert-info alert-with-icon',
      positionClass: 'toast-' + from + '-' +  align
    });
  }
}
