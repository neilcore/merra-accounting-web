import { Component, input } from '@angular/core';

@Component({
  selector: 'app-v-retro-button',
  imports: [],
  templateUrl: './v-retro-button.html',
  styleUrl: './v-retro-button.css'
})
export class VRetroButton {
  label = input<string>('');
}
