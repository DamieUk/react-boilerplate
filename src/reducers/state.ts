import { MDashboard } from 'models';
import { FormStateMap } from 'redux-form';

export interface RootState {
  dashboard: MDashboard;
  router?: any;
  form: FormStateMap;
}

export namespace RootState {
  export type Dashboard = MDashboard;
}