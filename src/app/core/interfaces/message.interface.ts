import { MessageType } from "../enums/message-type.enum";

export interface IMessage {
  type: MessageType;
  content: Array<string>;
}
