import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { TextareaAutosizeDirective } from "./textarea-autosize/textarea-autosize.directive";
import { MessagesComponent } from "./messages/messages.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TextareaAutosizeDirective,
    MessagesComponent
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [HeaderComponent, FooterComponent, MessagesComponent, FormsModule]
})
export class SharedModule {}
