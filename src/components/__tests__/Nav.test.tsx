/* eslint-disable node/no-unpublished-import */
// @ts-nocheck

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../../lib/redux/init/store';
import { Nav } from '../Nav';


const init = () => {
    const { container } = render(
        <Router>
            <Provider store = { store } >
                <Nav />
            </Provider>
        </Router>,
    );

    return container;
};


describe('Hero', () => {
    it('should have 6 links', () => {
        init();
        const container = init();

        expect(container.querySelectorAll('a').length).toEqual(6);
    });

    it('should have link with a href to all topics', () => {
        init();

        const container = init();

        expect(container.querySelectorAll('a')[ 0 ].href.includes('/all-topics')).toBeTruthy();
    });
});

