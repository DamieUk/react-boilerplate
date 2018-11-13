import * as React from 'react';
import {
  Field,
  reduxForm,
  InjectedFormProps,
} from 'redux-form';
import { FormRadioGroup } from 'elements';
import { required } from 'utils';

const OPTIONS = [{
 label: 'value 1',
 value: 'foooo',
}, {
  label: 'value 2',
  value: 'boooo',
}];

class UserRequiredInfo extends React.PureComponent<InjectedFormProps<any>> {

  render(){
    return (
      <form className="center-block small text-center pl-15 pr-15" onSubmit={this.props.handleSubmit}>
        <h2 className="mb-30 hide-for-medium">Enter Profile</h2>
        <h2 className="mb-30 show-for-medium">Let us know a little bit about you.</h2>
        <div className="mb-20">
          <Field
            required
            name="firstName"
            label="First Name"
            validate={required}
            options={OPTIONS}
            component={FormRadioGroup}
          />
        </div>
        <button type="submit" hidden />
      </form>
    );
  }
}

// @ts-ignore
export const UserRequiredInfoForm = reduxForm({
  form: 'boardingUserRequiredInfo',
  enableReinitialize: true,
})(UserRequiredInfo);

export default UserRequiredInfoForm;
