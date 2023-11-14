import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild
} from "@angular/core";

@Component({
  selector: "app-listeners",
  templateUrl: "./listeners.component.html",
  styleUrls: ["./listeners.component.scss"]
})
export class ListenersComponent {
  @ViewChild("scroll") scroll!: ElementRef;
  @ViewChild("resize") resize!: ElementRef;
  @ViewChild("click") click!: ElementRef;

  constructor(private _renderer: Renderer2) {}

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

  @HostListener("document:click", ["$event"])
  onClickOutside(evt: Event): void {
    if (!this.click.nativeElement.contains(evt.target)) alert("Outside click!");
  }
}
