import * as React from 'react';
import {
  Field,
  change,
  reduxForm,
  InjectedFormProps,
} from 'redux-form';
import Dropzone, { ImageFile } from 'react-dropzone';
import { FormInput } from 'elements';
import { required, dispatchAction } from 'utils';
import { CurrentUserData } from 'interfaces/redux';
import UserIcon from './UserIcon';

interface FormProps {
  formValues: CurrentUserData;
}

class UserMainInfo extends React.PureComponent<InjectedFormProps & FormProps> {
  onDrop = (files: ImageFile[]) => {
    dispatchAction(change('boardingUserInfo', 'image', files[0]));
  }

  render(){
    const { formValues } = this.props;
    const imageUrl: any = formValues && formValues.image && formValues.image.preview;

    return (
      <form className="center-block small text-center pl-15 pr-15" onSubmit={this.props.handleSubmit}>
        <h2 className="mb-30 hide-for-medium">Enter Profile</h2>
        <h2 className="mb-30 show-for-medium">Let us know a little bit about you.</h2>
        <Dropzone
          className="mb-20"
          onDrop={this.onDrop}
        >
          <UserIcon imageUrl={imageUrl}/>
        </Dropzone>
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
    );
  }
}

// @ts-ignore
export default reduxForm({form: 'boardingUserInfo', enableReinitialize: true })(UserMainInfo);
