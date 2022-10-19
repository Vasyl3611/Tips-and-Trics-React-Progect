/* eslint-disable node/no-unpublished-import */
// @ts-nocheck
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import nock from 'nock';
import { Hero } from '../Hero';
import { store } from '../../lib/redux/init/store';

const queryClient = new QueryClient();
const fakeData =  [
    {
        id:   'asfdasdfasd124123414fadsf',
        name: 'React',
    },
];
const init = () => {
    const { container } = render(
        <Router>
            <Provider store = { store }>
                <QueryClientProvider client = { queryClient }>
                    <Hero tipViewMode = 'all-topics'></Hero>
                </QueryClientProvider>
            </Provider>
        </Router>,
    );

    return container;
};

nock('https://lab.lectrum.io/rtx/api/tips-and-tricks')
    .persist()
    .get('/tags')
    .once()
    .reply(200, fakeData, { 'Access-Control-Allow-Origin': '*' });

describe('Hero', () => {
    it('should have header element', () => {
        init();
        const heading = screen.getByRole('heading', { level: 1, name: /Типсы и Триксы/i });

        expect(heading).toBeInTheDocument();
    });

    it('should render tags', async () => {
        init();

        const tags = await screen.findAllByRole('listitem');

        expect(tags).toHaveLength(1);
    });

    it('snapshot', () => {
        const container = init();
        expect(container).toMatchSnapshot();
    });
});

