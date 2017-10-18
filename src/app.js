import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Expenses from './pages/Expenses/Expenses';
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const Login = () => (
  <div>Login</div>
);

const NotFound = () => (
  <div>
    404! - <NavLink to="/expenses" activeClassName="is-active">Go Home!</NavLink>
  </div>
);

const routes = (
  <BrowserRouter>
    <MuiThemeProvider>
      <Switch>
        <Route path="/expenses" component={Expenses} exact={true} />
        <Route path="/expenses" component={Expenses} />
        <Route path="/locations" component={NotFound} />
        <Route path="/profile" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </MuiThemeProvider>
  </BrowserRouter>
);



ReactDOM.render(routes, document.getElementById("app"));