import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-landing',
  imports: [RouterLink, MatButtonModule],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class Landing {
}
