import React from "react";
import { Redirect, Route } from "react-router-dom";

const isAuthenticate = () => localStorage.getItem('Yt');

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticate() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
          pathname: "/login",
          state: { from: props.location }
        }} />
      )
    }
  />
);

export default PrivateRoute;