import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastModel } from '../model/toast-model';
import { ToastPosition } from '../model/toast-position';
import { ToastType } from '../model/toast-type';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  $toastState = new BehaviorSubject<ToastModel>(new ToastModel(false));

  public show(
    title: string,
    message: string,
    seconds: number = 5,
    type: ToastType = ToastType.Info,
    position: ToastPosition = ToastPosition.TopRight
  ) {
    if (seconds <= 5) seconds = 5;

    let toast = new ToastModel(true);
    toast.title = title;
    toast.message = message;
    toast.position = position;
    toast.type = type;

    this.$toastState.next(toast);
    setTimeout(() => this.$toastState.next(new ToastModel(false)), seconds * 1000);
  }  
}
