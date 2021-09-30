import {
  Component,
  OnDestroy,
  ContentChild,
  ElementRef,
  TemplateRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
  HostListener,
} from "@angular/core";

@Component({
  selector: "iex-modal",
  templateUrl: "./iex-modal.component.html",
  styleUrls: ["./iex-modal.component.scss"],
})
export class IexModalComponent implements OnDestroy {
  @ContentChild("modalHeader") header: TemplateRef<any>;
  @ContentChild("modalBody") body: TemplateRef<any>;
  @ContentChild("modalFooter") footer: TemplateRef<any>;
  @Input() closeOnOutsideClick = true;

  visible = false;
  visibleAnimate = false;

  constructor(
    private elementRef: ElementRef,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnDestroy() {
    this.close();
  }

  open(): void {
    document.body.classList.add("modal-open");

    this.visible = true;
    setTimeout(() => {
      this.visibleAnimate = true;
    });
  }

  close(): void {
    document.body.classList.remove("modal-open");

    this.visibleAnimate = false;
    setTimeout(() => {
      this.visible = false;
      this.changeDetectorRef.markForCheck();
    }, 200);
  }

  @HostListener("click", ["$event"])
  onContainerClicked(event: MouseEvent): void {
    if (
      (<HTMLElement>event.target).classList.contains("modal") &&
      this.isTopMost() &&
      this.closeOnOutsideClick
    ) {
      this.close();
    }
  }

  @HostListener("document:keydown", ["$event"])
  onKeyDownHandler(event: KeyboardEvent) {
    if (event.key === "Escape" && this.isTopMost()) {
      this.close();
    }
  }

  isTopMost(): boolean {
    return !this.elementRef.nativeElement.querySelector(
      ":scope iex-modal > .modal"
    );
  }
}
