import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Expenses from './pages/Expenses/Expenses';
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const App = () => (
  <MuiThemeProvider>
    <Expenses />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("app"));