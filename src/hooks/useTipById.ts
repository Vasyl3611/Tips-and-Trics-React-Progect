import { useQuery } from 'react-query';
import { api } from '../api';
import { ITipModel } from '../types';

export const useTipById = (id: string) => {
    const { data, isFetchedAfterMount, isSuccess } = useQuery<ITipModel>(
        ['tips', id],
        () => api.getTipById(id),
    );

    return {
        isFetchedAfterMount,
        data,
        isSuccess,
    };
};
