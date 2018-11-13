import { createAction } from 'redux-actions';

export namespace DashboardActions {
  export enum Type {
    add = 'add-new-info',
    reset = 'reset-statistic'
  }

  export const addStatistic = createAction(Type.add);
}