import React from 'react'
import { Navigate } from 'react-router-dom'

const Privateroutes = ({ children }) => {
  const isAuth = "QpwL5tke4Pnpja7X4";

  if (!isAuth) {
    return <Navigate to={"/login" }/>;
  }
  else{
    return children;
  }
};

export default Privateroutes
