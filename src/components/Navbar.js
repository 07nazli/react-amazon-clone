import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const Navbar = () => {
  const [basket, setBasket] = useState([]);
  return (
    <div className="navbar">
      <Link to="/">
        <img
          className="navbar_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon"
        />
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
