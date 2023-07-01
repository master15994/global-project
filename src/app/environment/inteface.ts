export interface Environment {
  apiKey: string;
  production: boolean;
  returnSecureToken: boolean;
}

export interface FbAuthResponse {
  idToken: string;
}
