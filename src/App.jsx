import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MainHome from "./pages/MainHome";
import SignUp from "./pages/SignUp";
import ProductPage from "./layouts/main-home/ProductPage";
import Profile from "./layouts/main-home/Profile";
import Checkout from "./layouts/main-home/Checkout";

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
    </Routes>
  );
};

export default App;
