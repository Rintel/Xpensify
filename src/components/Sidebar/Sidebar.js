import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


const Sidebar = () => {
  return (
    <Drawer>
      <MenuItem>Menu Item 1</MenuItem>
      <MenuItem>Menu Item 2</MenuItem>
    </Drawer>
  );
};

export default Sidebar;