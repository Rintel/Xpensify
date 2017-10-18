import React from 'react';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
  togglemenu: PropTypes.func.isRequired
};

const Header = ({ title, togglemenu }) => {
  return (
    <AppBar
      title={title}
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      onLeftIconButtonTouchTap={togglemenu}
    />
  );
};

Header.propTypes = propTypes;

export default Header;
