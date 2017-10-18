import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <Drawer containerClassName="Sidebar">
      <div className="Sidebar__Menu-Items">
        <MenuItem 
          className="Sidebar__Menu-Item"> 
          <NavLink activeClassName="is-active" to="/expenses">
            Expenses
          </NavLink>
        </MenuItem>
        <MenuItem 
          className="Sidebar__Menu-Item"
        >
          Locations
        </MenuItem>
        <MenuItem 
          className="Sidebar__Menu-Item"
        >
          Profile
        </MenuItem>
      </div>
    </Drawer>
  );
};

export default Sidebar;