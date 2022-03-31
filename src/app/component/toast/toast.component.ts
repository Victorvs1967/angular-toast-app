import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastModel } from 'src/app/model/toast-model';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  public toastModel?: ToastModel;
  private $subscription: Subscription;

  constructor(private _toastService: ToastService) {
    this.$subscription = this._toastService.$toastState.subscribe((toastModel: ToastModel) => this.toastModel = toastModel);
  }

  public close(): void { this.toastModel!.visible = false; }

  ngOnDestroy(): void { this.$subscription.unsubscribe(); }

  ngOnInit(): void {
  }

}
