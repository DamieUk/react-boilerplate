import types from './actionTypes';

const initialState = {
  data: {},
};

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case types.fetchData:
      return {
        ...state,
        data: payload,
      };

    default:
      return state;
  }
};