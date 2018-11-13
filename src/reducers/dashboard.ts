import { handleActions } from 'redux-actions';
import { DashboardActions } from 'actions/dashboard';
import { MDashboard } from 'models';
import { RootState } from './state';

const initialState: RootState.Dashboard = {
  statistics: [],
  sideEffects: {},
};

const reducer = handleActions<RootState.Dashboard, MDashboard>({
    [DashboardActions.Type.add]: (state, action) => state,
    [DashboardActions.Type.reset]: (state, action) => state,
  },
  initialState
);

export default reducer;