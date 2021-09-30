import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CheckSnilsRoutingModule } from "./check-snils-routing.module";
import { CheckSnilsComponent } from "./check-snils/check-snils.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [CheckSnilsComponent],
  imports: [SharedModule, CommonModule, CheckSnilsRoutingModule]
})
export class CheckSnilsModule {}
