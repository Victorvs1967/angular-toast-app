import { ToastPosition } from "./toast-position";
import { ToastType } from "./toast-type";

export class ToastModel {
  
  public visible: boolean;

  public title?: string;
  public message?: string;
  public position: ToastPosition;
  public type: ToastType;

  constructor(visible: boolean) {
    this.visible = visible;
    this.type = ToastType.Info;
    this.position = ToastPosition.Center
  }
}