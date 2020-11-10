import React from "react";
import { useAuth } from "../providers/AuthProvider";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? { ...props } : <Redirect to="/login" />;
      }}
    ></Route>
  );
}
