import { Component, input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-v-button',
  imports: [MatButtonModule],
  templateUrl: './v-button.html',
  styleUrl: './v-button.css'
})
export class VButton {
  readonly label = input<string>('');
}
