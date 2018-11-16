import { MDashboard } from 'models';
import { FormReducerMapObject } from 'redux-form';

export interface RootState {
  dashboard: MDashboard;
  router?: any;
  form: FormReducerMapObject;
}

export namespace RootState {
  export type Dashboard = MDashboard;
}