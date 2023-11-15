import { Component, HostBinding } from "@angular/core";

@Component({
  selector: "app-binding",
  templateUrl: "./binding.component.html",
  styleUrls: ["./binding.component.scss"]
})
export class BindingComponent {

  @HostBinding('style.color') color = 'blue';
  @HostBinding('attr.example-attr') attr = 'value-attr';
  // This class is declared in styles.scss
  @HostBinding('class.badge') badgeClass = true;
}
