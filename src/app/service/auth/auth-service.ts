import { Injectable, inject } from '@angular/core';
import { API_URL, API_AUTH, API_SIGNIN, API_SIGNUP } from '../../shared/utils/endpoints';
import { HttpClient } from '@angular/common/http';
import { Config } from '../../shared/utils/types/apiConfig';
import { Observable } from 'rxjs';
import {Signin, Signup, AuthTokens, UserDetails } from '../../shared/utils/types/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  protected http = inject(HttpClient);
  protected userDetails: UserDetails | null = null;
  protected authToken = {accessToken: '', refreshToken: ''};
  errorMessage: string = '';

  private authEndpoint = API_URL + API_AUTH;

  setTokens(tokens: AuthTokens) {
    this.authToken.accessToken = tokens.accessToken;
    this.authToken.refreshToken = tokens.refreshToken;
  }

  setUserDetails(details: UserDetails) {
    this.userDetails = details;
  }

  getEmail(): string {
    return this.userDetails?.email || '';
  }

  getUserId(): string {
    return this.userDetails?.id || '';
  }

  getTokens(): AuthTokens {
    return {
      accessToken: this.authToken.accessToken,
      refreshToken: this.authToken.refreshToken
    };
  }

  signin(request: Signin): Observable<Config> {
    // Return the Observable directly
    return this.http.post<Config>(`${this.authEndpoint}${API_SIGNIN}`, request);
  }

  signup(request: Signup): Observable<Config> {
    // Return the Observable directly
    return this.http.post<Config>(`${this.authEndpoint}${API_SIGNUP}`, request);
  }

}
