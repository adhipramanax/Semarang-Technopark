import React from "react";
import UserContext from "../context/userContext";
import { Navigate } from "react-router-dom";

const AuthMiddleware = ({ component }) => {
  const Component = component;
  const { user, logout } = React.useContext(UserContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Component user={user} logout={logout} />;
};

export default AuthMiddleware;
