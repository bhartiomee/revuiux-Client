import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';

import createRootReducer from './app/reducers';

export const history = createBrowserHistory();

const { REACT_APP_NODE_ENV } = process.env;
export const store = createStore(
    createRootReducer(history),
    compose(
        applyMiddleware(
            thunk,
            routerMiddleware(history),
        ),
        REACT_APP_NODE_ENV === 'development' &&
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : compose,
    ),
);

export const dispatchAction = (action) => (store.dispatch(action));
