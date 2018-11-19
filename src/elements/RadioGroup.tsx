import * as React from 'react';
import { noop } from 'lodash';
import cn from 'classnames';
import { WrappedFieldProps } from 'redux-form';
import { generateId } from 'utilities';

interface Option {
  label: string;
  value: any;
  disabled: boolean;
}

interface RadioButtonProps {
  name: string;
  disabled: boolean;
  onChange: Function;
  value: any;
  label: Node | string;
}

interface RadioButtonGroupProps {
  name: string;
  onChange: Function;
  value: string | null;
  options: Option[];
  className: string;
  disabled: boolean;
}

const RadioButton = (props: RadioButtonProps) => (
  <label
    className={cn('dp-radio-button', { disabled: props.disabled })}
  >
    <div>
      <input
        name={props.name}
        type="radio"
        className="dp-radio-button-input"
        onChange={() => props.onChange(!props.value)}
        checked={props.value}
      />
    </div>
    <div>
      <span className="dp-radio-button-label">{props.label}</span>
    </div>
  </label>
);

class RadioGroupComponent extends React.PureComponent<RadioButtonGroupProps> {
    static defaultProps = {
    name: generateId(),
    onChange: noop,
    value: '',
  // @ts-ignore
    options: [],
    className: '',
    disabled: false,
  };

  handleSelect(value: string) {
    this.props.onChange(value);
  }

  renderRadioButtons() {
    const { name, options, value } = this.props;

    return options.map((element: Option) => (
      <RadioButton
        name={name}
        label={element.label}
        disabled={element.disabled}
        value={element.value === value}
        onChange={() => this.handleSelect(element.value)}
      />
    ));
  }

  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        {this.renderRadioButtons()}
      </div>
    );
  }
}

export const FormRadioGroup = ({ input, ...otherProps }: WrappedFieldProps) => (
  <RadioGroupComponent {...otherProps} {...input}/>
)

export default RadioGroupComponent;
