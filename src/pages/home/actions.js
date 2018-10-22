import { GET, createAction } from 'utils';
import types from './actionTypes';

export const fetchDataAction = (dispatch, payload) => dispatch(
  createAction(types.fetchData, payload)
);

export const fetchDataRequest = (dispatch, params) => {
  return GET('/api/v1/data', params)
    .then(res => fetchDataAction(dispatch, res))
};