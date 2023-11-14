import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "listeners",
    loadChildren: () =>
      import("./listeners/listeners.module").then((m) => m.ListenersModule)
  },
  {
    path: "binding",
    loadChildren: () =>
      import("./binding/binding.module").then((m) => m.BindingModule)
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
