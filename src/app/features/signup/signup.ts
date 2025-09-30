import { Component, signal, WritableSignal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, Router } from '@angular/router';
import {ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { inject } from "@angular/core";
import { AuthService } from '../../service/auth/auth-service';
// Update the import path to the correct location if needed
import { VButton } from '../../shared/components/vanilla/v-button/v-button';

@Component({
  selector: 'app-signup',
  imports: [MatButtonModule, RouterLink, ReactiveFormsModule, VButton],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  private signupService = inject(AuthService);
  private router = inject(Router);

  emailError: WritableSignal<string> = signal('');
  firstNameError: WritableSignal<string> = signal('');
  lastNameError: WritableSignal<string> = signal('');
  passwordError: WritableSignal<string> = signal('');


  signupForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    fname: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lname: new FormControl('', [Validators.required, Validators.minLength(2)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  handleSubmit() {
    this.emailError.set('');
    this.firstNameError.set('');
    this.lastNameError.set('');
    this.passwordError.set('');

    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();

      if (this.signupForm.getError('required', 'email')) {
        this.emailError.set('Email is required.');
      }
      if (this.signupForm.getError('required', 'fname')) {
        this.firstNameError.set('First name is required.');
      }
      if (this.signupForm.getError('required', 'lname')) {
        this.lastNameError.set('Last name is required.');
      }
      if (this.signupForm.getError('required', 'password')) {
        this.passwordError.set('Password is required.');
      }

      return;
    }
      const credentials = {
        email: this.signupForm.get('email')?.value || '',
        firstName: this.signupForm.get('fname')?.value || '',
        lastName: this.signupForm.get('lname')?.value || '',
        password: this.signupForm.get('password')?.value || ''
      };

      this.signupService.signup(credentials)
      .subscribe({
        next: (res) => {
          console.info('Signup successful');
          this.signupService.setTokens({
            accessToken: res.data.token?.accessToken,
            refreshToken: res.data.token?.refreshToken
          });
          this.signupService.setUserDetails({
            id: res.data?.user.userId,
            email: res.data?.user.email
          });
        },
        error: (error) => {
          console.error('There was an error during the signup request: ', error);
        },
        complete: () => {
          console.info('Signup request completed');
          this.router.navigate(['/admin/main']);
        }
      });
  }
}
