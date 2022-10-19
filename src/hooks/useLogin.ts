import { AxiosError } from 'axios';
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { api } from '../api';
import { ILoginFormShape } from '../components/forms/types';
import { authActions } from '../lib/redux/actions';

export const useLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const mutation = useMutation((credentials: ILoginFormShape) => {
        return api.login(credentials);
    }, {
        onError(error: AxiosError) {
            const { response } = error;

            if (response?.status === 401) {
                dispatch(authActions.setError('Wrong email or password'));
            } else {
                dispatch(authActions.setError('Wrong request'));
            }
        },
    });

    useEffect(() => {
        if (mutation.isSuccess) {
            const data = mutation.data?.data;
            dispatch(authActions.setToken(data));
            localStorage.setItem('token', data);
            navigate('/all-topics');
        }
    }, [mutation.isSuccess]);

    return mutation;
};
