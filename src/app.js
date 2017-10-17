import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MaterialButtonTest from './components/MaterialButtonTest';
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const App = () => (
  <MuiThemeProvider>
    <MaterialButtonTest />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("app"));