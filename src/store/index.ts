import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import rootReducer from '../reducers';
import { rootEpic } from '../epics';

const composeEnhancers = (
    process.env.NODE_ENV === 'development' &&
    window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

export const epicMiddleware = createEpicMiddleware();
export const browserHistory = createBrowserHistory();
export const routerMiddleware = createRouterMiddleware(browserHistory);

function configureStore() {
    const middlewares = [
        epicMiddleware,
        routerMiddleware,
    ];

    const enhancer = composeEnhancers(applyMiddleware(...middlewares));

    return createStore(
        rootReducer,
        {},
        enhancer
    );
}

export const store = configureStore();

epicMiddleware.run(rootEpic);

export default store;