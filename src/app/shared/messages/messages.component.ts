import { Component, OnInit, Input } from "@angular/core";
import { MessagesService } from "src/app/core/services/messages.service";
import { IMessage } from "src/app/core/interfaces/message.interface";

@Component({
  selector: "messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.scss"],
})
export class MessagesComponent implements OnInit {
  subscriptions: Array<any> = [];
  message: IMessage;
  constructor(private readonly messagesService: MessagesService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.messagesService.sharedMessage.subscribe(
        (message) => (this.message = message)
      )
    );
  }

  public close() {
    this.subscriptions.map((s) => s.unsubscribe());
    this.message = {} as any;
  }
}
