import { Action } from 'redux';

// Declare our action types using our interface. For a better debugging experience,
// I use the `@@context/ACTION_TYPE` convention for naming action types.

export interface FirstAction extends Action {
  type: '@@onboarding/firstAction';
  payload: {
    users: any;
  };
}

export interface SecondAction extends Action {
  type: '@@onboarding/secondAction';
  payload: {
    timestamp: Date;
    user: string;
  };
}

// Down here, we'll create a discriminated union type of all actions which will be used for our reducer.
export type OnboardingActions = FirstAction | SecondAction;