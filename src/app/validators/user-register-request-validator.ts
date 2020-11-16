import * as Yup from 'yup';
import {AddressModel, UserRegisterRequestModel} from '../models/user.model';

export const UserRegisterRequestValidator = Yup.object().shape<UserRegisterRequestModel>({
  email: Yup.string().email().required(),
  name: Yup.string().required(),
  password: Yup.string().required(),
  phone: Yup.string().min(11).required(),
  address: Yup.object().shape<AddressModel>({
    state: Yup.string().required(),
    city: Yup.string().required(),
    street: Yup.string().required(),
    district: Yup.string().required(),
    zipCode:  Yup.string().required(),
    number: Yup.string().required(),
    complement:  Yup.string()
  })
});
