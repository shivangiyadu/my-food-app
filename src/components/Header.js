import React, { useState ,useContext} from "react";
import ReactDOM from 'react-dom/client';
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

  const [btnNameReact,setBtnNameReact]=useState("login"); 
  const onlineStatus=UseOnlineStatus();

  const {loggedInUser}=useContext(UserContext);
  

  //Selector
  //here we are subscribing to the store using selector
  const cartItems=useSelector((store)=>store.cart.items);
  console.log(cartItems);

    return (
      <div className="flex justify-between bg-orange-100 shadow-lg m-4 rounded-xl">
        <div className="logo-container rounded-xl">
          <img 
          src={LOGO_URL}
            alt="App Logo"
            className="w-56"
          />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? '✅' : '⛔'}</li>
          <li className="px-4">
            <Link to="/" className="links">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link to="/about" className="links">
              About Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/contact" className="links">
              Contact Us
            </Link>
          </li>
          <li className="px-4 font-bold">
           <Link to="/cart">Cart -({cartItems.length}items)</Link></li>
            <button
            className="loginBtn"
            onClick={() => {
              
              btnNameReact === 'Login'
                ? setBtnNameReact('Logout')
                : setBtnNameReact('Login');
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;