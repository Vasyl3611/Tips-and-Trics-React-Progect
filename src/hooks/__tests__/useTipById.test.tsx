/* eslint-disable node/no-unpublished-import */
// @ts-nocheck
import nock from 'nock';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderHook } from '@testing-library/react-hooks';
import { store } from '../../lib/redux/init/store';
import { useTipById } from '../useTipById';

// @ts-nockeck
const fakeData = {
    id:      'id',
    title:   'title',
    preview: 'preview',
    body:    'body',
    author:  'author',
    tag:     {
        if:   'id',
        name: 'string',
    },
    created: 'string',

};

const interceptor = nock('https://lab.lectrum.io/rtx/api/tips-and-tricks')
    .persist()
    .get('/tips/1')
    .once()
    .reply(200, fakeData, { 'Access-Control-Allow-Origin': '*' });

describe('useTipById hook', () => {
    let wrapper = null;
    beforeAll(() => {
        const queryClient = new QueryClient();

        wrapper = ({ children }) => (
            <Router>
                <Provider store = { store } >
                    <QueryClientProvider client = { queryClient } >
                        { children }
                    </QueryClientProvider>
                </Provider>
            </Router>
        );
    });

    it('should return tip by id', async () => {
        const { result, waitFor } = renderHook(() => useTipById(1), { wrapper });

        await waitFor(() => {
            return result.current.isSuccess;
        });

        expect(result.current.data).toEqual(fakeData);
        interceptor.done();
    });
});

