import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild
} from "@angular/core";
import { ModalService } from "../../services/modal.service";

@Component({
  selector: "app-listeners",
  templateUrl: "./listeners.component.html",
  styleUrls: ["./listeners.component.scss"],
  standalone: true
})
export class ListenersComponent {
  @ViewChild("scroll") scroll!: ElementRef;
  @ViewChild("resize") resize!: ElementRef;

  constructor(
    private _renderer: Renderer2,
    private _modalSvc: ModalService
  ) {}

  @HostListener("window:scroll", ["$event.target.scrollingElement.scrollTop"])
  onScroll(scrollTop: number): void {
    scrollTop > 100
      ? this._renderer.setStyle(
          this.scroll.nativeElement,
          "background-color",
          "yellow"
        )
      : this._renderer.setStyle(
          this.scroll.nativeElement,
          "background-color",
          "transparent"
        );
  }

  @HostListener("window:resize", ["$event.target.innerWidth"])
  onResize(innerWidth: number): void {
    innerWidth <= 992
      ? this._renderer.setStyle(
          this.resize.nativeElement,
          "background-color",
          "green"
        )
      : this._renderer.setStyle(
          this.resize.nativeElement,
          "background-color",
          "transparent"
        );
  }

  ngAfterViewInit(): void {
    this.onResize(window.innerWidth);
  }

  openModal(evt: Event): void {
    const btnModal: HTMLButtonElement = evt.target as HTMLButtonElement;
    this._modalSvc.setModal({ show: true, btnModal });
  }
}
