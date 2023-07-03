import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Navbar() {

    const {cart} = useSelector((state) => state);
  return (
    <div className="flex justify-around w-full lg:mx-auto items-center h-16 md:mx-auto bg-blue-500 fixed">
      <NavLink to="/">
        <img src="../logo.png" alt="BuyCart" 
         className="w-40"
        />
      </NavLink>
      <div className=" md:flex md:items-center font-semibold text-slate-100 mr-5 space-x-8">
        <NavLink to="/">
          <p>Home</p>
        </NavLink>

        <NavLink to="/wishlist">
          <p>Wishlist</p>
        </NavLink>

        <NavLink to="/cart">
            <div className="relative flex items-center gap-2">
              <FaShoppingCart />
              {
                cart.length > 0 &&
                <span className="absolute -top-2 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span>
              }
              <p>Cart</p>
            </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
