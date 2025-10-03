import { Component } from '@angular/core';
import { PageLabel } from '../../../shared/components/pageLabel/page-label/page-label';
import { CustomSection } from '../../../shared/components/section/custom-section/custom-section';
import { VRetroButton } from '../../../shared/components/button/v-retro-button/v-retro-button';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-invoice-view',
  imports: [PageLabel, CustomSection, VRetroButton, MatTableModule],
  templateUrl: './invoice-view.html',
  styleUrl: './invoice-view.css'
})
export class InvoiceView {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
}
