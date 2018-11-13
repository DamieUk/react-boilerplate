import { combineReducers, Reducer } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import onboarding from '../reducers/on-boarding';
import currentUser from '../reducers/auth';
import { Store } from '../interfaces/redux';

const reducers: Reducer<Store> = combineReducers<any>({
  router: routerReducer,
  form,
  onboarding,
  currentUser,
});

export default reducers;