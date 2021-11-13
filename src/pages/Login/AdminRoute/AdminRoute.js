import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, isLoading } = useAuth();
  if (isLoading) {
    return <Spinner animation="border" variant="danger" />;
  }

  if (!admin) {
    return (
      <Link to="/">
        {" "}
        if You are a Admin Please Login as Admin. Otherwise You are Unauthorizes
        Person!!!!!!
      </Link>
    );
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
