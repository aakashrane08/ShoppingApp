import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { GoSearch } from "react-icons/go"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Navbar() {
  const { cart } = useSelector((state) => state);
  const { handleChange } = useContext(AppContext);

  return (
    <nav className="flex justify-evenly w-full lg:mx-auto items-center h-16 md:mx-auto bg-blue-500 fixed">
      <NavLink to="/">
        <img src="../logo.png" alt="BuyCart" className="w-40" />
      </NavLink>

      <form className=" relative">
        <input
          className="py-2 pr-56 pl-4 rounded-full border-none border-black"
          type="text"
          placeholder="Search for Products"
          onChange={handleChange}
        />
        <GoSearch className="absolute right-4 top-1/3 cursor-text"/>
      </form>

      <div className=" md:flex md:items-center font-semibold text-slate-100 mr-5 space-x-8">
        <p className="flex items-center h-full cursor-pointer relative group">
          <FaUser className=" mr-2" />
          Profile
          <div>
            <div className="w-24 h-5 top-6 absolute -left-2"></div>
            <div className="group-hover:block group-hover:visible hidden w-24 h-1 bg-red-600 border border-red-600 absolute top-10 -left-2"></div>
            <div className=" group-hover:flex hidden gap-2 absolute bg-slate-50 w-60 rounded-md shadow-lg font-normal p-5 flex-col text-black top-11 -left-20">
              <ul className="  border-b-2 border-gray-300 pb-2">
                <li className=" font-black text-2xl">Hello User,</li>
              </ul>
              <ul className="  border-b-2 border-gray-300 py-2">
                <li className=" hover:font-semibold">Orders</li>
                <Link to="/wishlist">
                  <li className=" hover:font-semibold">Wishlist</li>
                </Link>
                <li className=" hover:font-semibold">Gift Cards</li>
                <li className=" hover:font-semibold">Coupons</li>
                <li className=" hover:font-semibold">Saved Cards</li>
                <li className=" hover:font-semibold">Contact Us</li>
              </ul>
              <ul className="  border-gray-300 py-2">
                <li className=" hover:font-semibold">Edit Profile</li>
                <li className=" hover:font-semibold">Logout</li>
              </ul>
            </div>
          </div>
        </p>

        <NavLink to="/wishlist">
          <p>Wishlist</p>
        </NavLink>

        <NavLink to="/cart">
          <div className="relative flex items-center gap-2">
            <FaShoppingCart />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                {cart.length}
              </span>
            )}
            <p>Cart</p>
          </div>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
