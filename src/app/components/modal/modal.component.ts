import { Component } from "@angular/core";
import { ModalService, TModal } from "../../services/modal.service";
import { OutsideClickDirective } from "../../directives/outside-click.directive";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
  standalone: true,
  imports: [OutsideClickDirective]
})
export class ModalComponent {
  btnModal: HTMLButtonElement | null = null;

  constructor(private _modalSvc: ModalService) {}

  ngOnInit(): void {
    this.getModal();
  }

  getModal(): void {
    this._modalSvc
      .getModal()
      .subscribe((modal: TModal) => (this.btnModal = modal.btnModal));
  }

  closeModal(): void {
    this._modalSvc.setModal({ show: false, btnModal: null });
  }
}
