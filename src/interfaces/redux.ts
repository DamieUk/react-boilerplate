import { FormReducerMapObject } from 'redux-form';
import { RouterState } from 'react-router-redux';

export interface Store {
  router: RouterState;
  form: FormReducerMapObject;
}