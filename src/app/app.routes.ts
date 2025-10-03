import { Routes } from '@angular/router';
import { Landing } from './features/landing/landing';
import { Signin } from './features/signin/signin';
import { Signup } from './features/signup/signup';
import {OrganizationSelect} from './features/organization-select/organization-select';
import { Organization } from '../app/features/organization/organization';
import {Admin} from './shared/components/admin/admin';
import {Main} from './features/main/main';
import {Dashboard} from './features/dashboard/dashboard';
import {InvoiceView} from './features/invoice/invoice-view/invoice-view';
import {Notfound} from './features/notfound/notfound';
import { provideHttpClient, withInterceptors, withRequestsMadeViaParent } from '@angular/common/http';
import {authInterceptor} from './shared/utils/interceptors/auth/auth-interceptor';
import {Organizationservice} from './service/organization/organizationservice';

export const routes: Routes = [
  {
    path: '',
    component: Landing,
    title: 'MERRA'
  },
  {
    path: 'sign-in',
    component: Signin,
    title: 'Sign In to MERRA'
  },
  {
    path: 'sign-up',
    component: Signup,
    title: 'Create MERRA Account'
  },
  {
    path: 'select/organization',
    providers: [
      provideHttpClient(withInterceptors([authInterceptor]), withRequestsMadeViaParent()),
      Organizationservice
    ],
    component: OrganizationSelect,
    title: 'Select Organization'
  },
  {
    path: 'admin',
    component: Admin,
    title: 'MERRA Admin',
    providers: [
      provideHttpClient(
        withInterceptors([authInterceptor]),
        withRequestsMadeViaParent()
      )
    ],
    children: [
      {
        path: 'main',
        component: Main,
        title: 'Admin Main'
      },
      {
        path: 'organization',
        component: Organization,
        title: 'Organization'
      },
      {
        path: 'invoice',
        component: InvoiceView,
        title: 'Invoice'
      },
      {
        path: 'dashboard',
        component: Dashboard,
        title: 'Admin Dashboard'
      }
    ]
  },
  {
    path: '**',
    component: Notfound,
    title: 'Page Not Found',
    outlet: 'client-outlet'
  }
];
