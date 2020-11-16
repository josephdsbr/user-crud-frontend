export interface UserState {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: AddressModel;
}

export interface AddressModel {
  id?: number;
  street: string;
  number: string;
  complement?: string;
  district: string;
  zipCode: string;
  city: string;
  state: string;
}

export interface UserRegisterRequestModel {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: AddressModel;
}
