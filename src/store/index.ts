import {
  createStore,
  applyMiddleware,
} from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { Store as StoreInterface } from '../interfaces/redux';
import reducers from '../reducers';

export const history = createBrowserHistory();
const composeEnhancers = composeWithDevTools({});

export default createStore<StoreInterface, any, any, any>(
  reducers,
  {},
  composeEnhancers(applyMiddleware(
    routerMiddleware(history),
  ))
);