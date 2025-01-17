import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'p-button',
  templateUrl: './button-demo.html',
  standalone: true,
  imports: [ButtonModule]
})

export class PButton { }
