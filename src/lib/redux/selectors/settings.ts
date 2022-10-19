import { RootState } from '../init/store';

export const getIsSettingsOpen = (state: RootState): boolean => {
    return state.settings.isSettingsOpen;
};
