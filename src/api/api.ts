// Api
import { tipsApi } from './tips';
import { tagsApi } from './tags';
import { authApi } from './auth';
import { profileApi } from './profile';

export const api = {
    ...tagsApi,
    ...tipsApi,
    ...authApi,
    ...profileApi,
};
