import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VSelect } from '../select/v-select/v-select';
import { VRetroButton } from '../button/v-retro-button/v-retro-button';

@Component({
  selector: 'app-admin',
  imports: [RouterOutlet, VSelect, VRetroButton],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {
}
