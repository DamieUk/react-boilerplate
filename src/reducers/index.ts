import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { RootState } from './state';
import dashboard from './dashboard';

const reducers = combineReducers<RootState, any>({
  router: routerReducer,
  form,
  dashboard,
});

export default reducers;