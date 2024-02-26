import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MainHome from "./pages/MainHome";
import SignUp from "./pages/SignUp";
import ProductPage from "./layouts/main-home/ProductPage";
import Profile from "./layouts/main-home/Profile";
import Checkout from "./layouts/main-home/Checkout";
import AdminLogin from "./admin-routes/AdminLogin";
import Dashboard from "./admin-routes/Dashboard";
import Products from "./admin-routes/Products";
import Orders from "./admin-routes/Orders";
import Analysis from "./admin-routes/Analysis";
import Users from "./admin-routes/Users";
import Wallet from "./admin-routes/Wallet";
import Settings from "./admin-routes/Settings";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/home" element={<MainHome />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/product/:id" element={<ProductPage />}></Route>
      <Route path="/admin-login" element={<AdminLogin />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/analysis" element={<Analysis />}></Route>
      <Route path="/users" element={<Users />}></Route>
      <Route path="/wallet" element={<Wallet />}></Route>
      <Route path="/settings" element={<Settings />}></Route>
    </Routes>
  );
};

export default App;
