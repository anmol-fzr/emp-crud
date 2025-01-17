import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppNavbar],
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'emp-crud';
}
