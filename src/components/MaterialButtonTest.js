import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import List from './List/List';
import Header from './Header/Header';
import './style.css';

export default class MaterialButtonTest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <div className="content-container">
          <Header
            title={"Xpensify"}
            togglemenu={this.handleToggle}
          />
          <List />
        </div>
        <Drawer open={this.state.open}>
          <MenuItem onClick={this.handleToggle}>Close</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>

      </div>
    );
  }
}
