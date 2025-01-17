import { Component } from '@angular/core';
import { PButton } from '../components';
import { UbButtonDirective } from "@/components/ui/button";

@Component({
  selector: 'app-navbar',
  imports: [UbButtonDirective],
  templateUrl: './navbar.component.html',
})

export class AppNavbar {
  links = [
    {
      label: "Employee List",
      routerLink: "/",
    },
    {
      label: "Create New Employee",
      routerLink: "/new",
    },
    {
      label: "Employee Statistics",
      routerLink: "/stats",
    },
  ]
}
