import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MainHome from "./pages/MainHome";
import SignUp from "./pages/SignUp";
import ProductPage from "./layouts/main-home/ProductPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/home" element={<MainHome />}></Route>
      <Route path="/product/:id" element={<ProductPage />}></Route>
    </Routes>
  );
};

export default App;
