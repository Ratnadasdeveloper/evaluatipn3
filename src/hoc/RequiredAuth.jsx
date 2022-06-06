import React, { useContext } from "react";
import { Navigate } from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";

const RequiredAuth = ({ children }) => {
  const{isAuth}=useContext(AuthContext)
  if(isAuth){
  return children;
  }
  else{
    return <Navigate to="/Login"/>
  }
  
};

export default RequiredAuth;