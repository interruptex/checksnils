import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CheckSnilsComponent } from "./check-snils/check-snils.component";

const routes: Routes = [{ path: "", component: CheckSnilsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckSnilsRoutingModule {}
