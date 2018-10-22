import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import home from 'pages/home/reducer';

const reducers = combineReducers({
  routing: routerReducer,
  form,
  home,
});

export default reducers;