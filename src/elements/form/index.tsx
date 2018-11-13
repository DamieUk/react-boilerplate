import * as React from 'react';
import * as moment from 'moment';
import {
  isEmpty as _isEmpty,
  isArray as _isArray,
} from 'lodash';

const EMAIL_PATTERN = /(.+)@(.+){2,}\.(.+){2,}/;
const URL_PATTERN = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
const ERRORS_MESSAGES = {
  empty: 'Cannot be blank',
  email: 'Enter correct email address',
  url: 'Enter correct url',
};

interface FormProps {
  inputs: object;
  errors: object;
}

interface InputNameItemType {
  valueType: string;
  name: string;
  type: string;
  required: boolean;
}

class Form extends React.Component<FormProps> {
  static get defaultProps() {
    return {
      inputs: {},
      errors: {},
    };
  }

  get getInputs() {
    return this.state.inputs;
  }

  get getErrors() {
    return this.state.errors;
  }

  get hasErrors() {
    return !_isEmpty(this.state.errors);
  }

  state: FormProps = {
    inputs: {},
    errors: this.props.inputs || {},
  };

  inputNames: Array<InputNameItemType> = [];
  constructor(props: FormProps) {
    super(props);
    this.onSave = this.onSave.bind(this);
    this.handleInputsChange = this.handleInputsChange.bind(this);
  }

  componentDidMount() {
    this.initInputs();
    this.onDidMount();
  }

  resetInputs() {
    this.setState({ inputs: {} });
  }

  onError(errors: object) {} // tslint-disable-line

  onSave() {
    const { isValid, errors } = this.validate();
    const { inputs } = this.state;

    if (isValid) {
      return Promise.resolve(inputs);
    }

    this.onError(errors);
    return Promise.reject(errors);
  }

  onDidMount() {} // eslint-disable-line

  getError(name: string) {
    return this.state.errors[name];
  }

  getInput(name: string) {
    return this.state.inputs[name];
  }

  setInputs(inputs: object) {
    this.setState({ inputs: { ...this.state.inputs, ...inputs } });
  }

  setErrors(errors: object) {
    this.setState({ errors });
  }

  initInputs() {
    const inputs: object = {};

    this.inputNames
      .forEach((el: InputNameItemType) =>
        inputs[el.name] = this.defineInputState(el.valueType, name)
      );

    this.setState({ inputs });
  }

  defineInputState(valueType: string, name: string) {
    switch (valueType) {
      case 'array':
        return _isArray(this.getInput(name)) ? this.getInput(name) : [];
      case 'number':
        return this.getInput(name) || null;
      case 'date':
        return moment(this.getInput(name) || new Date());
      case 'bool':
        return typeof this.getInput(name) === 'boolean' ? this.getInput(name) : null;
      default:
        return this.getInput(name) || '';
    }
  }

  removeInputInstance(name: string) {
    return this.inputNames.filter((inst: InputNameItemType) => inst.name !== name);
  }

  handleInputsChange(name: string, value: any) {
    this.setState({
      inputs: { ...this.state.inputs, [name]: value },
    });
  }

  input(name: string, { type = 'text', required = true, valueType = 'string' } = {}) {
    const filteredNames: InputNameItemType[] = this.removeInputInstance(name);
    this.inputNames = [...filteredNames, { name, type, required, valueType }];

    return {
      id: name.toUpperCase(),
      type,
      required,
      value: this.defineInputState(valueType, name),
      error: this.getError(name),
      onChange: (value: any) => this.handleInputsChange(name, value),
    };
  }

  validate() {
    const errors = {};

    this.inputNames.forEach(({ name, type, required, valueType }) => {
      if (required) {
        if (type === 'email' && !this.getInput(name).match(EMAIL_PATTERN)) {
          errors[name] = ERRORS_MESSAGES.email;
        }

        if (type === 'url' && !this.getInput(name).match(URL_PATTERN)) {
          errors[name] = ERRORS_MESSAGES.url;
        }

        if (valueType === 'string' && !this.getInput(name)) {
          errors[name] = ERRORS_MESSAGES.empty;
        }

        if (valueType === 'radio' && (this.getInput(name) === null)) {
          errors[name] = ERRORS_MESSAGES.empty;
        }

        if (valueType === 'array' && !(this.getInput(name) || []).length) {
          errors[name] = ERRORS_MESSAGES.empty;
        }

        if (valueType === 'number' && this.getInput(name) === null) {
          errors[name] = ERRORS_MESSAGES.empty;
        }

        if (valueType === 'bool' && this.getInput(name) === null || this.getInput(name) === undefined) {
          errors[name] = ERRORS_MESSAGES.empty;
        }

        if (valueType === 'date' && this.getInput(name) === null) {
          errors[name] = ERRORS_MESSAGES.empty;
        }
      }
    });

    this.setErrors(errors);

    return { errors, isValid: _isEmpty(errors) };
  }
}

export default Form;


// EXAMPLE OF USAGE!!!!!!!!!!!
//
// class MyForm extends FormHandler {
//   constructor(props) {
//     this.state = {
//       ...super().state, ---->>>> !!! Important !!!! if you want use another state,
//                                      you need to extend your state container with Form state
//       yourState: null
//     }
//   }
//
//   save = () => {
//     this.onSave()
//       .then(validFormData => ...)
//       .catch(err => ...)
//   };
//
//   render() {
//     return (
//       <div>
//         <div>
//           <Input
//             {...this.input('username')}
//             placeholder="User Name"
//           />
//         </div>
//
//         <div>
//           <Input
//             {...this.input('email', {type: 'email'})}
//             placeholder="Email"
//           />
//         </div>
//
//         <Button onClick={this.save} />
//       </div>
//     );
//   }
// }
