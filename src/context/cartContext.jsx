import React, { createContext,useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const[count,setcount]=useState(1)
  const addtocart=()=>{
    setcount(count+1)
  }
  const removetocart=()=>{
    setcount(count-1)
  }

  return <CartContext.Provider value={{count,addtocart,removetocart}}>{children}</CartContext.Provider>;
};
