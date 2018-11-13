import { Reducer } from 'redux';
import { CurrentUserData, BackAccount, OnboradingRequireInfo } from '../../interfaces/redux';
import { OnboardingActions } from '../../interfaces/pages/onboarding';

export interface OnbordingStateShape {
  allowedSteps: string[];
  main: CurrentUserData;
  required: OnboradingRequireInfo;
  bankAccount: BackAccount;
}

const initialState: OnbordingStateShape = {
  main: {
    firstName: '',
    lastName: '',
    middleName: '',
    email: '',
    image: null,
    company: '',
    code: '',
    zipCode: '',
    address: '',
    city: '',
    state: '',
    npi: null,
  },
  required: {
    certifications: [],
    vaccinations: [],
    emrSystems: null,
  },
  bankAccount: {
    selectedBanks: [],
    banks: [],
  },
  allowedSteps: [],
};

// Unfortunately, typing of the `action` parameter seems to be broken at the moment.
// This should be fixed in Redux 4.x, but for now, just augment your types.

const reducer: Reducer<OnbordingStateShape> = (state: OnbordingStateShape = initialState, action) => {
  // We'll augment the action type on the switch case to make sure we have
  // all the cases handled.
  switch ((action as OnboardingActions).type) {
    default:
      return state;
  }
};

export default reducer;