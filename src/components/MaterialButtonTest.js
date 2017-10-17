import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class MaterialButtonTest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <Drawer open={this.state.open}>
          <MenuItem onClick={this.handleToggle}>Close</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
        <RaisedButton
          label="Toggle Drawer"
          onClick={this.handleToggle}
        />
      </div>
    );
  }
}