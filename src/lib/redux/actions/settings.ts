import { settingsTypes } from '../types';

export const settingsActions = Object.freeze({
    setSettingsOpen: (isSettingsOpen: boolean) => {
        return {
            type:    settingsTypes.SET_SETTINGS_OPEN,
            payload: isSettingsOpen,
        };
    },
});
