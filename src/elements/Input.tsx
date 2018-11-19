import * as React from 'react';
import cn from 'classnames';
import { generateId } from 'utilities';
import {noop, bindAll} from 'lodash';
import { WrappedFieldProps } from 'redux-form';

export interface InputProps {
  value: number | string;
  type: string;
  name: string;
  label: Node | string | null;
  placeholder: string;
  disabled: boolean;
  required: boolean;
  onBlur: Function;
  onFocus: Function;
  onChange: Function;
  className: string;
  search: boolean;
  multiline: boolean;
  error: string | null;
}

class Input extends React.PureComponent<InputProps> {

  static get defaultProps(): InputProps {
    return {
      label: '',
      value: '',
      name: '',
      type: 'text',
      onChange: noop,
      className: '',
      required: false,
      search: false,
      placeholder: '',
      disabled: false,
      onBlur: noop,
      onFocus: noop,
      multiline: false,
      error: null,
    };
  }

  state = {
    isFocused: false,
  };

  inputId: string = generateId();

  input: any = null;

  constructor(props: InputProps) {
    super(props);
    bindAll(this, [
      'getInputNode',
      'checkValue',
      'onChange',
      'onFocus',
    ]);
  }

  componentDidMount() {
    if (!this.props.multiline) {
      this.input.value = this.props.value;
    }
  }

  onChange(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    this.props.onChange(event);
  }

  onFocus(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    this.props.onFocus(this.checkValue(event.target.value), event);
    this.setState({isFocused: true});
  }

  getInputNode() {
    return this.input;
  }

  /**
   * Number Inputs should return a number.
   * Text Inputs should return a string.
   */
  checkValue(value: string) {
    let currentValue: any = value;
    if (this.props.type === 'number') {
      currentValue = parseInt(currentValue, 10);
    }
    return currentValue;
  }

  render() {
    const {
      type,
      name,
      value,
      label,
      className,
      placeholder,
      disabled,
      required,
      onBlur,
      multiline,
      error,
    } = this.props;

    const { isFocused } = this.state;

    return (
      <div
        className={cn('dp-text-input', className, {
          'in-focus': isFocused,
          'has-error': !!error,
        })}
      >
        {label && <label htmlFor={this.inputId}>{label}</label>}
        {!multiline && (
          <input
            id={this.inputId}
            value={value}
            type={type}
            name={name}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            onBlur={(event) => {
              onBlur(event);
              this.setState({isFocused: false});
            }}
            onChange={this.onChange}
            onFocus={this.onFocus}
            ref={(input) => {
              this.input = input;
            }}
          />
        )}

        {multiline && (
          <textarea
            disabled={disabled}
            required={required}
            placeholder={placeholder}
            onChange={this.onChange}
            onFocus={this.onFocus}
            ref={(input) => {
              this.input = input;
            }}
          />
        )}
        {error && <small className="text-left color-alert">{error}</small>}
      </div>
    );
  }
}

export class FormInput extends React.PureComponent<WrappedFieldProps> {
  render() {
    const {
      input,
      meta: {
        error,
        touched,
      },
      ...restProps
    } = this.props;

    return <Input
      error={touched && error}
      {...input}
      {...restProps}
    />;
  }
}

export default Input;
