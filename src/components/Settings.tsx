// Core
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { settingsActions } from '../lib/redux/actions';
import { useAppDispatch } from '../lib/redux/init/store';
import { getIsSettingsOpen } from '../lib/redux/selectors';

export const Settings: React.FC = () => {
    const dispatch = useAppDispatch();
    const isSettingsOpen = useSelector(getIsSettingsOpen);

    const handleClick = () => {
        dispatch(settingsActions.setSettingsOpen(false));
    };

    const settingClasses = cx('settings', {
        open:   isSettingsOpen,
        closed: !isSettingsOpen,
    });

    return (
        <section className = { settingClasses }>
            <header>
                <h1>
                Настройки
                </h1>
            </header>
            <footer>
                <button onClick = { handleClick }>
                    Закрити
                </button>
            </footer>
        </section>
    );
};
