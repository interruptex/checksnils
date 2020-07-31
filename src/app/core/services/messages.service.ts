import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IMessage } from "../interfaces/message.interface";

@Injectable({
  providedIn: "root",
})
export class MessagesService {
  private message: BehaviorSubject<IMessage> = new BehaviorSubject({} as any);
  public sharedMessage = this.message.asObservable();

  constructor() {}

  public nextMessage(message: IMessage) {
    this.message.next(message);
  }
}
