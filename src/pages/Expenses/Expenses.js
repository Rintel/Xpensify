import React from 'react';
import List from '../../components/List/List';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Expenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <MuiThemeProvider>
        <div className="content-container">
          <Header title={"Xpensify"} />
          <List />
          <Sidebar />
        </div>
      </MuiThemeProvider>
    );
  }
}
