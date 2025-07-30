import React from 'react'
import { Navigate } from 'react-router-dom'

const Privateroutes = ({ children }) => {
  const isAuth = false;

  if (!isAuth) {
    return <Navigate to={"/login" }/>;
  }
  else{
    return children;
  }
};

export default Privateroutes
