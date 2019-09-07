import React from "react";
import { Route, Redirect } from "react-router-dom";

export const HomeRouteGuard = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (rest.isUserLoggedIn) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export const LoginRouteGuard = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!rest.isUserLoggedIn) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/home" />;
        }
      }}
    />
  );
};