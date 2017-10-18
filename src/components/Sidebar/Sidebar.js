import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


const Sidebar = () => {
  return (
    <Drawer containerClassName="Sidebar">
      <div className="Sidebar__Menu-Items">
        <MenuItem className="Sidebar__Menu-Item">Menu Item 1</MenuItem>
        <MenuItem className="Sidebar__Menu-Item">Menu Item 2</MenuItem>
        <MenuItem className="Sidebar__Menu-Item">Menu Item 3</MenuItem>
      </div>
    </Drawer>
  );
};

export default Sidebar;