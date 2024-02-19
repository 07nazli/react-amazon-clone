import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const Navbar = () => {
  const [basket, setBasket] = useState([]);

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
      <Link to="/">
        <img
          className="navbar_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon"
        />
      </Link>

      <Link>
        <div className="navbar_location" style={containerStyle}>
          <CiLocationOn />
          <div style={labelStyle}>Deliver to</div>
          <div style={valueStyle}>United Kingdom</div>
        </div>
      </Link>

      <div className="navbar_search">
        <input className="navbar_searchInput" type="text"></input>
        <IoMdSearch className="navbar_searchIcon" />
      </div>
      <div className="navbar_nav">
        <Link to="./login">
          <div className="navbar_option">
            <span className="navbar_optionLineOne">Hello</span>
            <span className="navbar_optionLineTwo">Account & Lists</span>
          </div>
        </Link>
        <Link to="/">
          <div className="navbar_option">
            <span className="navbar_optionLineOne">Return</span>
            <span className="navbar_optionLineTwo">Orders</span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="navbar_optionBasket">
            <MdOutlineAddShoppingCart />
            <span className="navbar_optionLineTwo navbar_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
