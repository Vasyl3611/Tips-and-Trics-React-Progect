import { RootState } from '../init/store';
import { initialState } from '../reducers/profile';

export const getToken = (state: RootState): string => {
    return state.auth.token;
};

export const getErrorMessage = (state: RootState): string => {
    return state.auth.errorMessage;
};

export const getProfileState = (state: RootState): typeof initialState => {
    return state.profile;
};
