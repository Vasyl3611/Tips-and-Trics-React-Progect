import axios, { AxiosResponse } from 'axios';
import waait from 'waait';
import { ISignUp } from '../components/forms/SignUpForm/config';
import { ILoginFormShape } from '../components/forms/types';
import { ILogin, ISignUpWithToken } from '../types';

const ROOT_URL = process.env.REACT_APP_API_URL;
const requestDelay = 0;

export const authApi = Object.freeze({
    async signUp(user: ISignUp): Promise<ISignUpWithToken> {
        const { data: newUser } = await axios.post<ISignUp, AxiosResponse<ISignUpWithToken>>(
            `${ROOT_URL}/auth/registration`,
            user,
        );

        await waait(requestDelay);

        return newUser;
    },
    async login(credentials: ILoginFormShape): Promise<ILogin> {
        const { email, password } = credentials;
        const { data } = await axios.get<ILogin>(
            `${ROOT_URL}/auth/login`,
            {
                headers: {
                    Authorization: `Basic ${window.btoa(`${email}:${password}`)}`,
                },
            },
        );

        await waait(requestDelay);

        return data;
    },
});
