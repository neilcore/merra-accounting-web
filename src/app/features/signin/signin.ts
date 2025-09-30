import { Component, signal, WritableSignal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, Router } from '@angular/router';
import {ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { inject } from "@angular/core";
import { AuthService } from '../../service/auth/auth-service';
import {AuthResponse} from '../../shared/utils/types/auth';
import { VButton } from '../../shared/components/vanilla/v-button/v-button';

@Component({
  selector: 'app-signin',
  imports: [
    MatButtonModule, RouterLink,
    ReactiveFormsModule, VButton
  ],
  templateUrl: './signin.html',
  styleUrl: './signin.css'
})
export class Signin {
  private signinService = inject(AuthService);
  private router = inject(Router);

  errorMessageEmail: WritableSignal<string> = signal('');
  errorMessagePassword: WritableSignal<string> = signal('');

  signinForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  onSubmit() {
    this.errorMessageEmail.set('');
    this.errorMessagePassword.set('');

    if (this.signinForm.invalid) {

      this.signinForm.markAllAsTouched();

      if (this.signinForm.getError('required', 'email')) {
        this.errorMessageEmail.set('Email is required.');
      }

      if (this.signinForm.getError('required', 'password')) {
        this.errorMessagePassword.set('Password is invalid.');
      }
      return;
    }

    const credentials = {
      email: this.signinForm.get('email')?.value || '',
      password: this.signinForm.get('password')?.value || ''
    };

    this.signinService.signin(credentials)
    .subscribe({
      next: (res: AuthResponse) => {
        console.info('Signin successful: ', res);

        this.signinService.setTokens({
          accessToken: res.data.token?.accessToken,
          refreshToken: res.data.token?.refreshToken
        });
        this.signinService.setUserDetails({
          id: res.data?.user.userId,
          email: res.data?.user.email
        });
      },
      error: (error) => {
        console.error('There was an error during the signin request: ', error);
        if (error?.error?.errors && error.error.errors.length > 0) {
          this.errorMessageEmail.set(error.error.errors[0]);
        } else {
          this.errorMessageEmail.set('An unexpected error occurred.');
        }
      },
      complete: () => {
        console.info('Signin successful');
        this.errorMessageEmail.set('');
        this.errorMessagePassword.set('');

        this.router.navigate(['/select/organization']);
      }
    });
  }
}
