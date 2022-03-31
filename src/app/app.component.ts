import { Component } from '@angular/core';
import { ToastPosition } from './model/toast-position';
import { ToastType } from './model/toast-type';
import { ToastService } from './service/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title?: string;
  public message?: string;

  constructor(private _toastService: ToastService) {
  }

  public showWarningToast(): void {
    this._toastService.show(this.title!, this.message!, 5, ToastType.Warning, ToastPosition.TopRight);
  }
  
  public showErrorToast(): void {
    this._toastService.show(this.title!, this.message!, 5, ToastType.Error, ToastPosition.TopLeft);
  }

  public showInfoToast(): void {
    this._toastService.show(this.title!, this.message!, 5, ToastType.Info, ToastPosition.Center);
  }

}
