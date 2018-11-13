import * as React from 'react';
import cn from 'classnames';

interface ButtonProps {
  status: string;
  type: string;
  label: Node | string;
  className: string;
  iconLeft: Node | null;
  iconRight: Node | null;
}

class Button extends React.PureComponent<ButtonProps, {}> {
  static defaultProps = {
    status: 'primary',
    type: 'button',
    label: null,
    className: '',
  };

  render() {
    const {
      type,
      label,
      className,
      status,
      children,
      iconLeft,
      iconRight,
      ...otherProps
    } = this.props;

    return (
      <button
        className={cn('dp-button', className, `dp-button-${status}`)}
        type={type}
        {...otherProps}
      >
        {iconLeft && <span className="dp-button-icon pr-10">{iconLeft}</span>}
        { label || children }
        {iconRight && <span className="dp-button-icon pl-10">{iconRight}</span>}
      </button>
    );
  }
}

export default Button;
