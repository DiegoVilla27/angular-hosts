import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from "@angular/core";

const selector: string = "[appOutsideClick]";

@Directive({
  selector,
  standalone: true
})
export class OutsideClickDirective implements OnChanges {
  @Input({ required: true }) isModal: boolean = false;
  @Input() modalClass: string = "";
  @Input() modalBtnTarget: HTMLButtonElement | null = null;
  @Output() outsideClick: EventEmitter<void> = new EventEmitter<void>();

  @HostListener("document:click", ["$event"])
  onClickOutside(evt: Event): void {
    const eventTarget = evt.target as Node;
    if (this.isModal) {
      const modalContent: HTMLDivElement = this._el.nativeElement.querySelector(
        `.${this.modalClass}`
      ) as HTMLDivElement;
      if (
        modalContent &&
        !modalContent.contains(eventTarget) &&
        eventTarget !== this.modalBtnTarget
      )
        this.outsideClick.emit();
    } else {
      if (!this._el.nativeElement.contains(eventTarget))
        this.outsideClick.emit();
    }
    evt.stopPropagation();
  }

  constructor(private _el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes["isModal"] &&
      this.isModal &&
      !this.modalClass &&
      !this.modalBtnTarget
    ) {
      throw new Error(
        `Directive: ${selector} - Inputs [modalClass] and [modalBtnTarget] are required when Input [isModal] is true`
      );
    }
  }
}
