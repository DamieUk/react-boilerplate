import * as React from 'react';

class Footer extends React.PureComponent {
  render() {
    return (
      <div className="page-footer">
        {this.props.children}
      </div>
    );
  }
}

export default Footer;
