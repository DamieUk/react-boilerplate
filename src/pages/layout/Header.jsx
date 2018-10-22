import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => (
  <header className={`page-header flex-between ${props.className}`}>
    Header
  </header>
);

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: '',
};

export default Header;
