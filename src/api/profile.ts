import axios from 'axios';
import waait from 'waait';
import { IProfile } from '../types';

const requestDelay = 0;

export const profileApi = Object.freeze({
    async getProfile(token: string): Promise<IProfile> {
        const { data: profile } = await axios.get<IProfile>(
            `${process.env.REACT_APP_API_URL}/auth/profile`,
            {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            },
        );

        await waait(requestDelay);

        return profile;
    },
});
