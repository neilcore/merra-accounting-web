import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL, API_VER_1, API_ORGANIZATION, API_USER_ORGANIZATION_OPTIONS } from '../../shared/utils/endpoints';
import { Config } from '../../shared/utils/types/apiConfig';
import {AuthService} from "../auth/auth-service";

@Injectable()
export class Organizationservice {
  protected http = inject(HttpClient);
  protected authService = inject(AuthService);
  private organizationTenantId: string = '';

  private userOrganizationEnpoint = `${API_URL}${API_VER_1}${API_ORGANIZATION}${API_USER_ORGANIZATION_OPTIONS}`;

  public getOrganizationTenantId(): string {
    return this.organizationTenantId;
  }

  public setOrganizationTenantId(tenantId: string): void {
    this.organizationTenantId = tenantId;
  }

  buildEndpoint(): string {
    const userId = this.authService.getUserId();
    return `${this.userOrganizationEnpoint}${userId}`;
  }

  getUserOrganizations(): Observable<Config> {
    return this.http.get<Config>(this.buildEndpoint());
  }
}
