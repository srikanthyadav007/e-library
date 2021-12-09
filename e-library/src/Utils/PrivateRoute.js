import React from 'react';
import { render } from "react-dom";
import { getToken } from './Common';
import {
  Route,
  Routes,
  Navigate,
  Outlet
} from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  return getToken() ? children : <Navigate  to="/login" />;
}

export default PrivateRoute;
