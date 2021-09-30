import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { INavItem } from "src/app/core/interfaces/nav-item.interface";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  path: string;
  navItems: Array<INavItem>;

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.navItems = [
      {
        icon: "fab fa-2x fa-github",
        routerLink: "https://github.com/interruptex/checksnils",
        external: true,
      },
    ];

    this.path = this.router.url;
  }
}
