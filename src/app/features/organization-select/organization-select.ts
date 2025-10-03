import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Organizationservice } from '../../service/organization/organizationservice';
import {ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { VButton } from '../../shared/components/button/v-button/v-button';

@Component({
  selector: 'app-organization-select',
  imports: [ReactiveFormsModule, VButton],
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
