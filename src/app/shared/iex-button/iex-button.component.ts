import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'iex-button',
  templateUrl: './iex-button.component.html',
  styleUrls: ['./iex-button.component.scss'],
  animations: [
    trigger('enterLeaveBottomTop', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(25%)' }),
        animate(
          '0.1s cubic-bezier(.42,0,.58,1)',
          style({ opacity: 1, transform: 'translateY(0%)' })
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateY(0%)' }),
        animate(
          '0.1s cubic-bezier(.42,0,.58,1)',
          style({ opacity: 0, transform: 'translateY(25%)' })
        ),
      ]),
    ]),
    trigger('enterLeaveRightLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(25%)' }),
        animate(
          '0.1s cubic-bezier(.42,0,.58,1)',
          style({ opacity: 1, transform: 'translateX(0%)' })
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateX(0%)' }),
        animate(
          '0.1s cubic-bezier(.42,0,.58,1)',
          style({ opacity: 0, transform: 'translateX(25%)' })
        ),
      ]),
    ]),
  ],
})
export class IexButtonComponent {
  hover: boolean = false;

  constructor() {}

  @Input() icon: string;
  @Input() text: string;
  @Input() iconColor: string;
  @Input() textColor: string;
  @Input() textWeight: string;
  @Input() iconBlockColor: string;
  @Input() textBlockColor: string;
  @Input() hoverIconColor: string;
  @Input() hoverTextColor: string;
  @Input() hoverIconBlockColor: string;
  @Input() hoverTextBlockColor: string;
  @Input() activeIconColor: string;
  @Input() activeIconBlockColor: string;
  @Input() activeTextColor: string;
  @Input() activeTextBlockColor: string;
  @Input() link: string;
  @Input() hint: string;
  @Input() hintAnimationDirection: string;
  @Input() badgeContainerColor: string;
  @Input() badgeHoverContainerColor: string;
  @Input() badgeActiveContainerColor: string;
  @Input() badge: string;
  @Input() badgeColor: string;
  @Input() badgeTextColor: string;
  @Input() isWorking: boolean;
  @Input() isWorkingColor: string;
  @Input() disabled: boolean;
  @Input() active: boolean;
  @Input() iconBorderTop: string;
  @Input() iconBorderRight: string;
  @Input() iconBorderBottom: string;
  @Input() iconBorderLeft: string;
  @Input() classes: any;
  @Input() iconBlockSize: string;

  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {}

  public setIconStyles() {
    let iconStyles = {
      color: this.iconColor || '#ffffff',
      'background-color': this.iconBlockColor || '#3b3b3b',
      'border-top': this.iconBorderTop || 'none',
      'border-right': this.iconBorderRight || 'none',
      'border-bottom': this.iconBorderBottom || 'none',
      'border-left': this.iconBorderLeft || 'none',
    };

    let hoverIconStyles = {
      color: this.hoverIconColor || '#ffffff',
      'background-color': this.hoverIconBlockColor || '#3b3b3b',
      'border-top': this.iconBorderTop || 'none',
      'border-right': this.iconBorderRight || 'none',
      'border-bottom': this.iconBorderBottom || 'none',
      'border-left': this.iconBorderLeft || 'none',
    };

    let activeIconStyles = {
      color: this.activeIconColor,
      'background-color': this.activeIconBlockColor,
      'border-top': this.iconBorderTop || 'none',
      'border-right': this.iconBorderRight || 'none',
      'border-bottom': this.iconBorderBottom || 'none',
      'border-left': this.iconBorderLeft || 'none',
    };

    if (this.active && this.activeIconColor && this.activeIconBlockColor)
      return activeIconStyles;

    if (this.hover && !this.text) return hoverIconStyles;

    return iconStyles;
  }

  public setTextStyles() {
    let textStyles = {
      color: this.textColor || '#ffffff',
      'background-color': this.textBlockColor || '#3b3b3b',
      'font-weight': this.textWeight || '400'
    };

    let hoverTextStyles = {
      color: this.hoverTextColor || '#ffffff',
      'background-color': this.hoverTextBlockColor || '#3b3b3b',
      'font-weight': this.textWeight || '400'
    };

    let activeTextStyles = {
      color: this.activeTextColor,
      'background-color': this.activeTextBlockColor,
      'font-weight': this.textWeight || '400'
    };

    if (this.active && this.activeTextColor && this.activeTextBlockColor)
      return activeTextStyles;

    if (this.hover) return hoverTextStyles;

    return textStyles;
  }

  public setBadgeContainerStyles() {
    let badgeContainerStyles = {
      'background-color': this.badgeContainerColor || 'transparent',
    };

    let badgeHoverContainerStyles = {
      'background-color': this.badgeHoverContainerColor || 'transparent',
    };

    let badgeActiveContainerStyles = {
      'background-color': this.badgeActiveContainerColor || 'transparent',
    };

    if (this.active && this.badgeActiveContainerColor)
      return badgeActiveContainerStyles;

    if (this.hover && !this.active) return badgeHoverContainerStyles;

    return badgeContainerStyles;
  }

  public setBadgeStyles() {
    let badgeStyles = {
      color: this.badgeTextColor || '#ffffff',
      'background-color': this.badgeColor || '#3b3b3b',
    };

    return badgeStyles;
  }

  handleClick(event: any) {
    this.onClick.emit(event);
  }
}
