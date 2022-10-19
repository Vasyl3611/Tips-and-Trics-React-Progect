import { AnyAction } from 'redux';
import { profileTypes } from '../types';

export const initialState = {
    name:       '',
    isFetching: false,
};

export const profileReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case profileTypes.START_FETCHING: {
            return {
                ...state,
                isFetching: true,
            };
        }

        case profileTypes.STOP_FETCHING: {
            return {
                ...state,
                isFetching: false,
            };
        }

        case profileTypes.FETCH_PROFILE: {
            return {
                ...state,
                isFetching: false,
                name:       action?.payload?.name,
            };
        }

        default: {
            return state;
        }
    }
};
