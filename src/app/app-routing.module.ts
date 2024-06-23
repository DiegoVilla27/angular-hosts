import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "listeners",
    loadComponent: () =>
      import("./pages/listeners/listeners.component").then(
        (m) => m.ListenersComponent
      )
  },
  {
    path: "binding",
    loadComponent: () =>
      import("./pages/binding/binding.component").then(
        (m) => m.BindingComponent
      )
  },
  {
    path: "",
    redirectTo: "listeners",
    pathMatch: "prefix"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
