import { Reducer } from 'redux';
import { CurrentUserData } from '../../interfaces/redux';
import { CurrentUserActions } from '../../interfaces/pages/currentUser';

// Type-safe initialState!
const initialState: CurrentUserData = {
  firstName: '',
  lastName: '',
  middleName: '',
  email: '',
  image: null,
  company: '',
  code: '',
  zipCode: '',
  npi: null,
  address: '',
  city: '',
  state: '',
};

// Unfortunately, typing of the `action` parameter seems to be broken at the moment.
// This should be fixed in Redux 4.x, but for now, just augment your types.

const reducer: Reducer<CurrentUserData> = (state: CurrentUserData = initialState, action) => {
  // We'll augment the action type on the switch case to make sure we have
  // all the cases handled.
  switch ((action as CurrentUserActions).type) {
    default:
      return state;
  }
};

export default reducer;