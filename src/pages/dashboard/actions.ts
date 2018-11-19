import { createAction } from 'redux-actions';
import { createActionRequest } from 'utilities';



export namespace DashboardActions {
    export enum Type {
        add = 'add-new-info',
        reset = 'reset-statistic'
    }

    export const getInfoRequest = createActionRequest('dashboard');
    export const addStatistic = createAction(Type.add);
}