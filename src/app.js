import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Expenses from './pages/Expenses/Expenses';
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const Login = () => (
  <div>Login</div>
);

const NotFound = () => (
  <div>
    404!
  </div>
);

const routes = (
  <BrowserRouter>
    <Switch>
      <MuiThemeProvider>
        <Route path="/" component={Login} exact={true} />
        <Route path="/expenses" component={Expenses} />
        <Route path="/locations" component={NotFound} />
        <Route path="/profile" component={NotFound} />
        <Route component={NotFound} />
      </MuiThemeProvider>
    </Switch>
  </BrowserRouter>
);



ReactDOM.render(routes, document.getElementById("app"));