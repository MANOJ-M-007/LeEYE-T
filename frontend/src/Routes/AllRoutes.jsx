import React from "react";
import {
  BrowserRouter,
  // Outlet,
  Route,
  Routes,
  // Navigate,
} from "react-router-dom";

import { useSelector } from "react-redux";
import RegisterPage from "../Pages/RegisterPage";
import HomePage from "../Pages/HomePage";
import LoginPage from '../Pages/LoginPage'
const AllRoutes = () => {
  return (
  <BrowserRouter>
    <Routes>
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/login" element={<LoginPage/>} /> 
    <Route path="/" element={<HomePage />} /> 
    </Routes>
  </BrowserRouter>
    );
};

export default AllRoutes;
