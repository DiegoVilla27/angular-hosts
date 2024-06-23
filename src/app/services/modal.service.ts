import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

export type TModal = { show: boolean; btnModal: HTMLButtonElement | null };

@Injectable({
  providedIn: "root"
})
export class ModalService {
  modalObs$: BehaviorSubject<TModal> = new BehaviorSubject<TModal>({
    show: false,
    btnModal: null
  });

  constructor() {}

  getModal(): Observable<TModal> {
    return this.modalObs$.asObservable();
  }

  setModal(value: TModal): void {
    this.modalObs$.next(value);
  }
}
