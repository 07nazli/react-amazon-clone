import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { useStateValue } from "./StateProvider";

const Navbar = () => {
  const [{ basket }, dispatch] = useStateValue();

  const containerStyle = {
    paddingRight: "1rem",
    paddingLeft: "1rem",
  };

  const labelStyle = {
    fontSize: "0.75rem", // text-xs
    "@media (min-width: 1280px)": {
      fontSize: "0.875rem", // xl:text-sm
    },
  };

  const valueStyle = {
    fontSize: "0.875rem", // text-sm
    "@media (min-width: 1280px)": {
      fontSize: "1rem", // xl:text-base
    },
    fontWeight: "bold", // font-bold
  };
  return (
    <div className="navbar">
      <Link className="links" to="/">
        <img
          className="navbar_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon"
        />
      </Link>

      <Link className="links">
        <div className="navbar_location" style={containerStyle}>
          <div className="navbar_optionLineOne" style={labelStyle}>
            Deliver to
          </div>
          <div style={valueStyle}>
            <SlLocationPin className="navbar_locationIcon" /> Turkey
          </div>
        </div>
      </Link>

      <div className="navbar_search">
        <input className="navbar_searchInput" type="text"></input>
        <IoSearchOutline className="navbar_searchIcon" />
      </div>
      <div className="navbar_nav">
        <Link className="links" to="./login">
          <div className="navbar_option">
            <span className="navbar_optionLineOne">Hello</span>
            <span className="navbar_optionLineTwo">Account & Lists</span>
          </div>
        </Link>
        <Link className="links" to="/">
          <div className="navbar_option">
            <span className="navbar_optionLineOne">Return</span>
            <span className="navbar_optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link className="links" to="/checkout">
          <div className="navbar_optionBasket">
            <FiShoppingCart />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
