import {combineEpics} from 'redux-observable';

import dashboardEpics from './dashboard';

export const rootEpic = combineEpics(
    ...dashboardEpics,
);