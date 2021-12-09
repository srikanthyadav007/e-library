import React from 'react';
import { render } from "react-dom";
import { getToken } from './Common';
import {
  Route,
  Routes,
  Navigate,
  Outlet
} from "react-router-dom";

const PublicRoute = ({ children, ...rest }) => {
  return !getToken() ? children : <Navigate  to="/" />;
}

export default PublicRoute;
