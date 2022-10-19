import * as yup from 'yup';
import { ILoginFormShape } from '../types';

// eslint-disable-next-line no-template-curly-in-string
const tooShortMessage = 'мінімальна довжина - ${min} символів';
// eslint-disable-next-line no-template-curly-in-string
const tooLongMessage = 'максимальна довжина - ${min} символів';

export const schema: yup.SchemaOf<ILoginFormShape> = yup.object().shape({
    email: yup
        .string()
        .email()
        .required('*'),
    password: yup
        .string()
        .min(8, tooShortMessage)
        .max(16, tooLongMessage)
        .required('*'),
});
