import { ElementRef } from "@angular/core";
import { OutsideClickDirective } from "./outside-click.directive";

describe("OutsideClickDirective", () => {
  it("should create an instance", () => {
    const elementRef: ElementRef = {} as ElementRef;
    const directive = new OutsideClickDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
