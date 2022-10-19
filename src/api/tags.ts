import axios from 'axios';
import waait from 'waait';
import { ITagModel } from '../types';

const requestDelay = 0;

export const tagsApi = Object.freeze({
    async getTags(): Promise<ITagModel[]> {
        const { data } = await axios.get<ITagModel[]>(`${process.env.REACT_APP_API_URL}/tags`);
        await waait(requestDelay);

        return data;
    },
});
