/* eslint-disable node/no-unpublished-import */
// @ts-nocheck
import nock from 'nock';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderHook } from '@testing-library/react-hooks';
import { store } from '../../lib/redux/init/store';
import { useTags } from '../useTags';

// @ts-nockeck
const fakeData = [
    {
        id:   'sfsd121',
        name: 'React',
    },
];

const interceptor = nock('https://lab.lectrum.io/rtx/api/tips-and-tricks')
    .persist()
    .get('/tags')
    .once()
    .reply(200, fakeData, { 'Access-Control-Allow-Origin': '*' });

describe('useTags hook', () => {
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

    it('should return array with tags', async () => {
        const { result, waitFor } = renderHook(() => useTags(), { wrapper });

        await waitFor(() => {
            return result.current.isSuccess;
        });

        expect(result.current.data).toEqual(fakeData);
        interceptor.done();
    });

    it('returned tags should be an array', async () => {
        const { result, waitFor } = renderHook(() => useTags(), { wrapper });

        await waitFor(() => {
            return result.current.isSuccess;
        });

        expect(Array.isArray(result.current.data)).toBeTruthy();
        interceptor.done();
    });
});
