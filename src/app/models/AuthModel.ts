export interface AuthState {
  email: string;
  token: string;
  loading: boolean;
}

export interface AuthSignInRequestModel {
  email: string;
  password: string;
}

export interface AuthSignInResponseModel {
  id: number;
  email: string;
  name: string;
  phone: string;
  token: string;
  createdAt: Date;
  updatedAt: Date;
}
