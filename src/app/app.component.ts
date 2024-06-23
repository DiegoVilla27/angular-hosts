import { Component } from "@angular/core";
import { ModalService, TModal } from "./services/modal.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "angular-hosts";
  isModalOpen = false;

  constructor(private _modalSvc: ModalService) {}

  ngOnInit(): void {
    this.watchModal();
  }

  watchModal(): void {
    this._modalSvc
      .getModal()
      .subscribe((value: TModal) => (this.isModalOpen = value.show));
  }
}
