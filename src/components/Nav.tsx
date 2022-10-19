// Core
import { SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { settingsActions } from '../lib/redux/actions';
import { useAppDispatch } from '../lib/redux/init/store';
import { getIsSettingsOpen, getToken } from '../lib/redux/selectors';

// Icons
import { icons } from '../theme/icons/nav';

// Styles
import { NavWrapper } from './styled/Nav.styles';

export const Nav: React.FC = () => {
    const dispatch = useAppDispatch();
    const isSettingsOpen = useSelector(getIsSettingsOpen);
    const token = useSelector(getToken);

    const handleClick = (event: SyntheticEvent<HTMLAnchorElement>) => {
        event.preventDefault();

        dispatch(settingsActions.setSettingsOpen(true));
    };

    return (
        <NavWrapper>
            <h1>T и T</h1>
            <NavLink to = '/all-topics'>
                <icons.Home /> Все темы
            </NavLink>
            <NavLink to = '/topic-by-tag'>
                <icons.Tag /> По тэгам
            </NavLink>
            <NavLink to = '/publish'>
                <icons.Publish />
                Опубликовать
            </NavLink>
            <a
                className = { isSettingsOpen ? 'active' : '' }
                onClick = { handleClick }>
                <icons.Settings /> Настройки
            </a>
            { !token ? <NavLink to = '/login'>
                <icons.Bolt /> Увійти
            </NavLink> : <NavLink to = '/logout'>
                <icons.Bolt /> Вийти
            </NavLink> }
            <NavLink to = '/profile'>
                <icons.Profile />
                Профиль
            </NavLink>
        </NavWrapper>
    );
};
