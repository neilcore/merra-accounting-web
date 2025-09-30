import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../../../service/auth/auth-service';
import {Organizationservice } from "../../../../service/organization/organizationservice";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthService).getTokens().accessToken;
  const organizationTenantId = inject(Organizationservice).getOrganizationTenantId();

  let headers = req.headers;

  if (req.method === 'POST' || req.method === 'PUT') {
    headers = headers.set('Content-Type', 'application/json');
  }

  if (token) {
    headers = headers.set('Authorization', `Bearer ${token}`);
  }

  if (organizationTenantId) {
    headers = headers.set('X-Tenant-ID', organizationTenantId);
  }

  const authReq = req.clone({headers, withCredentials: true});
  return next(authReq);
};
