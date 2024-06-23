import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ModalComponent } from "./components/modal/modal.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ModalComponent, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
