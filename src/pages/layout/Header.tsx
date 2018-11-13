import * as React from 'react';

class Header extends React.PureComponent {
  render() {
    return (
      <header className="page-header flex-between">
        <div className="logo-holder">
          <img src="/images/logo/logo-main.svg" alt=""/>
        </div>
      </header>
    )
  }
}

export default Header;
