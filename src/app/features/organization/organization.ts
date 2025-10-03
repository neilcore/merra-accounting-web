import { Component } from '@angular/core';
import { PageLabel } from '../../shared/components/pageLabel/page-label/page-label';
import { CustomSection } from '../../shared/components/section/custom-section/custom-section';
import { VRetroButton } from '../../shared/components/button/v-retro-button/v-retro-button';

@Component({
  selector: 'app-organization',
  imports: [PageLabel, CustomSection, VRetroButton],
  templateUrl: './organization.html',
  styleUrl: './organization.css'
})
export class Organization {

}
