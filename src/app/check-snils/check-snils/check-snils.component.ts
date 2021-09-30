import { Component, OnInit } from "@angular/core";
import { CheckSnilsService } from "src/app/core/services/check-snils.service";
import { MessagesService } from "src/app/core/services/messages.service";
import { MessageType } from "src/app/core/enums/message-type.enum";

@Component({
  selector: "app-check-snils",
  templateUrl: "./check-snils.component.html",
  styleUrls: ["./check-snils.component.scss"],
})
export class CheckSnilsComponent implements OnInit {
  snilsText: string;
  maxSnilsLength: number = 11;

  htmlIndexArray: Array<string> = ['<span class="index-invalid">1</span>'];
  htmlPointerArray: Array<string> = [
    '<span class="pointer-invalid"><i class="fas fa-long-arrow-alt-left"></i></span>',
  ];
  invalidSnilsArray: Array<string> = [];

  constructor(
    private readonly checkSnilsService: CheckSnilsService,
    private readonly messagesService: MessagesService
  ) {}

  ngOnInit(): void {
    this.messagesService.nextMessage({
      type: MessageType.notification,
      content: ["Введите или вставьте из буфера обмена номер СНИЛС"],
    });
  }

  formatSnilsText($event: any) {
    var text: string = this.snilsText;
    var lines: Array<string> = text.split(/(\r\n|\n|\r)/gm);

    for (var i = 0; i < lines.length; i++) {
      lines[i] = lines[i].replace(/[^\d+\n]/g,"");
      if (lines[i].length >= this.maxSnilsLength) {
        lines[i] = lines[i].substring(0, this.maxSnilsLength);
      }
    }

    this.snilsText = lines.join("");
    $event.target.value = this.snilsText;

    var snilsArray = this.snilsText.split(/\n/);

    this.htmlIndexArray = [];
    this.htmlPointerArray = [];
    this.invalidSnilsArray = [];

    for (var i = 0; i < snilsArray.length; i++) {
      this.htmlIndexArray[i] = this.checkSnilsService.isValidSnils(
        snilsArray[i]
      )
        ? '<span class="index-valid">' + (i + 1) + "</span>"
        : '<span class="index-invalid">' + (i + 1) + "</span>";

      this.htmlPointerArray[i] = this.checkSnilsService.isValidSnils(
        snilsArray[i]
      )
        ? '<span class="pointer-valid"><i class="fas fa-long-arrow-alt-left"></i></span>'
        : '<span class="pointer-invalid"><i class="fas fa-long-arrow-alt-left"></i></span>';

      if (!this.checkSnilsService.isValidSnils(snilsArray[i]))
        this.invalidSnilsArray.push(snilsArray[i]);
    }

    this.invalidSnilsArray.length > 0
      ? this.messagesService.nextMessage({
          type: MessageType.error,
          content: ["Некоторые номера СНИЛС введены некорректно"],
        })
      : this.messagesService.nextMessage({
          type: MessageType.success,
          content: ["Все номера СНИЛС введены корректно"],
        });

    if (
      this.invalidSnilsArray.length === 1 &&
      this.invalidSnilsArray[0].length === 0
    )
      this.messagesService.nextMessage({
        type: MessageType.notification,
        content: ["Введите или вставьте из буфера обмена номер СНИЛС"],
      });
  }
}
