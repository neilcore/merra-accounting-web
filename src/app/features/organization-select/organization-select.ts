import { Component } from '@angular/core';
import { inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { Organizationservice } from '../../service/organization/organizationservice';
import {ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-organization-select',
  imports: [MatButtonModule, ReactiveFormsModule],
  templateUrl: './organization-select.html',
  styleUrl: './organization-select.css'
})
export class OrganizationSelect {
  protected organizationService = inject(Organizationservice);
  protected organizations: any[] = [];

  constructor() {
    this.getUserOrganizations();
  }

  private getUserOrganizations() {
    this.organizationService.getUserOrganizations().subscribe({
      next: (data) => {
        console.log('Organizations:', data);
      },
      error: (error) => {
        console.error('Error fetching organizations hehe:', error);
      }
    });
  }

  onOrganizationSelect() {

  }
}
