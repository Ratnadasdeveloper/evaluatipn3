import React,{useContext} from "react";
import {Link,useNavigate} from "react-router-dom";
import {Authcontext} from"../../context/Authcontext";


// use react-router Link or NavLink
// const Link = <a />;


const Navbar = () => {
  const {isAuth,logout}=useContext(Authcontext)
  const Navigation=useNavigate;

  const onSubmit=()=>{
    console.log(isAuth)
    if(isAuth){
      logout();
      Navigate("/")
    }else{
      Navigate("/login")
    }
  }
  return (

    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/products">Products</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}</span>
      <button data-cy="navbar-login-logout-button" onClick={onSubmit}>{isAuth ?"Logout":"Login"}</button>
    </div>
  );
};

export default Navbar;
