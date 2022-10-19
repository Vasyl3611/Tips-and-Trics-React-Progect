import * as yup from 'yup';
import { ISignUpFormShape } from '../types';

// eslint-disable-next-line no-template-curly-in-string
const tooShortMessage = 'мінімальна довжина - ${min} символів';
// eslint-disable-next-line no-template-curly-in-string
const tooLongMessage = 'максимальна довжина - ${min} символів';

export const schema: yup.SchemaOf<ISignUpFormShape> = yup.object().shape({
    name: yup
        .string()
        .min(5, tooShortMessage)
        .max(40, tooLongMessage)
        .required('*'),
    email: yup
        .string()
        .email()
        .required('*'),
    password: yup
        .string()
        .min(8, tooShortMessage)
        .max(16, tooLongMessage)
        .required('*'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Паролі мають співпадати')
        .required('*'),
});

export interface ISignUp extends Omit<ISignUpFormShape, 'confirmPassword'>{}
