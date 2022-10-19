// Core
import axios, { AxiosResponse } from 'axios';
import waait from 'waait';
import { IPublishFormShape } from '../components/forms/types';
import { AuthHeader, ITipModel } from '../types';

const requestDelay = 0;

export const tipsApi = Object.freeze({
    async getTips(): Promise<ITipModel[]> {
        const { data } = await axios.get<AxiosResponse<ITipModel[]>>(
            `${process.env.REACT_APP_API_URL}/tips`,
        );

        await waait(requestDelay);

        return data?.data;
    },
    async getTipById(id: string): Promise<ITipModel> {
        const { data: tipById } = await axios.get<ITipModel>(
            `${process.env.REACT_APP_API_URL}/tips/${id}`,
        );

        await waait(requestDelay);

        return tipById;
    },
    async createTip(tip: IPublishFormShape, token?: string) {
        const config: AuthHeader = {};
        if (token) {
            config.headers = {
                authorization: `Bearer ${token}`,
            };
        }
        const { data: newTip } = await axios.post(
            `${process.env.REACT_APP_API_URL}/tips`,
            tip,
            config,
        );

        await waait(requestDelay);

        return newTip;
    },
});
