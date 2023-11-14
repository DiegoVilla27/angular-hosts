import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListenersComponent } from "./listeners.component";

const routes: Routes = [
  {
    path: "",
    component: ListenersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListenersRoutingModule {}
