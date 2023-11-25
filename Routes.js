import React from "react";
import { Routes, Route } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Products from "./Products";
const appRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/account" element={<Account />}></Route>
    </Routes>
  );
};

export default appRoutes;
