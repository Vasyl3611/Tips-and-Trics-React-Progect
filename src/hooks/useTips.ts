// Core
import { useQuery } from 'react-query';
// Instruments
import { api } from '../api';
import { ITipModel } from '../types';

export const useTips = () => {
    const query = useQuery<ITipModel[]>('tips', api.getTips);
    const { data, isFetched, isSuccess } = query;

    return {
        data: Array.isArray(data) ? data : [],
        isFetched,
        isSuccess,
    };
};
