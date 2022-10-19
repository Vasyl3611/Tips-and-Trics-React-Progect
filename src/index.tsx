import { Provider } from 'react-redux';
// Core
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { App } from './App';

// Instruments
import './theme/main.scss';
import 'react-toastify/dist/ReactToastify.css';

// Context
import { queryClient } from './lib/queryClient';
import { store } from './lib/redux/init/store';

render(
    <Provider store = { store }>
        <QueryClientProvider client = { queryClient }>
            <Router>
                <App />
            </Router>
            <ReactQueryDevtools initialIsOpen = { false } />
        </QueryClientProvider>
    </Provider>,
    document.getElementById('root'),
);
