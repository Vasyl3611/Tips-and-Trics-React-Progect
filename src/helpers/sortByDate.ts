import { ITipModel } from '../types';

// Хелпер функция для сортировки дат.
export const sortByDate = (a: ITipModel, b: ITipModel) => {
    return new Date(b.created).getTime() - new Date(a.created).getTime();
};
