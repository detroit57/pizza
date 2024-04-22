import React from "react";
import { Outlet } from "react-router-dom";
import Login from "../pages/Login";

const useAuth = () => {
  const token = localStorage.getItem("token");
  const user = { loggedIn: true };
  token != null ? (user.loggedIn = true) : (user.loggedIn = false);
  return user && user.loggedIn;
};

const ProtectedRoute = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Login />;
};

export default ProtectedRoute;
