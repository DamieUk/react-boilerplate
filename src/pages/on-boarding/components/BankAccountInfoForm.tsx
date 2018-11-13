import * as React from 'react';
import {
  Field,
  reduxForm,
  InjectedFormProps,
} from 'redux-form';
import { FormInput } from 'elements';
import { required } from 'utils';

class UserRequiredInfo extends React.PureComponent<InjectedFormProps> {

  render(){
    return (
      <div>
        <h2>Welcome, General Healthcare! What do you require?</h2>
        <form className="center-block small text-center pl-15 pr-15" onSubmit={this.props.handleSubmit}>
          <div>
            <h4>Standard Certifications Required</h4>
          </div>
          <h2 className="mb-30 hide-for-medium">Enter Profile</h2>
          <h2 className="mb-30 show-for-medium">Let us know a little bit about you.</h2>
          <div className="mb-20">
            <Field
              required
              name="firstName"
              label="First Name"
              validate={required}
              component={FormInput}
            />
          </div>
          <div className="mb-20">
            <Field
              required
              name="middleName"
              label="Middle Name"
              validate={required}
              component={FormInput}
            />
          </div>
          <div className="mb-20">
            <Field
              required
              name="lastName"
              label="Last Name"
              validate={required}
              component={FormInput}
            />
          </div>
          <div className="mb-20">
            <Field
              required
              name="company"
              label="Company"
              validate={required}
              component={FormInput}
            />
          </div>
          <div className="mb-20">
            <Field
              required
              name="code"
              label="Verification Code"
              validate={required}
              component={FormInput}
            />
          </div>
          <div className="mb-20">
            <Field
              required
              name="npi"
              label="NPI Number"
              placeholder="e.g. 1234"
              validate={required}
              component={FormInput}
            />
          </div>
          <div className="mb-20">
            <Field
              required
              label="Address"
              name="address"
              placeholder="e.g. 123 Main Str"
              validate={required}
              component={FormInput}
            />
          </div>
          <div className="mb-20">
            <Field
              required
              label="City"
              name="city"
              placeholder="Text"
              validate={required}
              component={FormInput}
            />
          </div>
          <div className="row">
            <div className="row">
              <div className="column medium-7 small-12">
                <Field
                  required
                  label="State"
                  name="state"
                  placeholder="e.g. Massachusetts"
                  validate={required}
                  component={FormInput}
                />
              </div>
              <div className="column medium-5 small-12">
                <Field
                  required
                  label="Zip Code"
                  name="zipCode"
                  placeholder="e.g. 02114"
                  validate={required}
                  component={FormInput}
                />
              </div>
            </div>
          </div>
          <button type="submit" hidden />
        </form>
      </div>
    );
  }
}

// @ts-ignore
export const UserRequiredInfoForm = reduxForm({
  form: 'boardingUserBankInfo',
  enableReinitialize: true,
})(UserRequiredInfo);

export default UserRequiredInfoForm;
