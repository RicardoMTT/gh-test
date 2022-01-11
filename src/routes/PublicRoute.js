import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/providers/AuthContext";

export const PublicRoute = ({ children }) => {
  const { token } = useContext(AuthContext);
  console.log("token", token);
  return token && token ? <Navigate to="/dashboard" /> : children;
};
