import React from "react";

import { Switch, Redirect, Route } from "react-router-dom";

import Error404 from "./404";
import LoginPage from "./LoginPage/LoginPage";
import HomePage from "./HomePage/HomePage";

import { HomeRouteGuard, LoginRouteGuard } from "../RouteGuards";
import { connect } from "react-redux";

const App = props => {
  const { authStatus } = props;

  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <LoginRouteGuard
        exact
        path="/login"
        component={LoginPage}
        {...authStatus}
      />
      {/* <Route path="/login" component={LoginPage} /> */}
      <HomeRouteGuard exact path="/home" component={HomePage} {...authStatus} />
      {/* <Route path="/home" component={HomePage} /> */}
      <Route component={Error404} />
    </Switch>
  );
};

const mapStateToProps = ({ authStatus }) => ({ authStatus });

export default connect(mapStateToProps)(App);
