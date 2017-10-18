import React from 'react';
import AppBar from 'material-ui/AppBar';

const Header = (props) => (
  <AppBar
    title={props.title}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    onLeftIconButtonTouchTap={props.togglemenu}
  />
);

export default Header;
