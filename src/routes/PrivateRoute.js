import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/providers/AuthContext";
export const PrivateRoute = ({ children }) => {
  const { token } = useContext(AuthContext);
  console.log(token);
  // const location = useLocation();

  // localStorage.setItem('lastPath', location.pathname);

  return token ? children : <Navigate to="/login" />;
};
