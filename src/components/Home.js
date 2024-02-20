import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71hSinhAcdL._SX3000_.jpg"
          alt="Amazon Banner"
        />
        <div className="home_row">
          <Product
            id="1235"
            title="iPhone 15"
            price={9499.0}
            image="https://m.media-amazon.com/images/I/41wddqDWz6L._MCnd_AC_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
