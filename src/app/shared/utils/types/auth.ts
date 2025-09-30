export interface Signin {
  email: string,
  password: string
};

export interface Signup {
  email: string,
  firstName: string,
  lastName: string,
  password: string
};

export interface AuthTokens {
  readonly accessToken: string,
  readonly refreshToken: string
};

export interface UserDetails {
  id: string,
  email: string
}

export interface AuthResponse {
  result: boolean,
  response: string,
  message: string,
  data: any
};
