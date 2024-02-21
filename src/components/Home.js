import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/71hSinhAcdL._SX3000_.jpg"
          alt="Amazon Banner"
        />
        <div className="home_row">
          <Product
            id="1235"
            title="iPhone 15"
            price={9499.0}
            image="https://m.media-amazon.com/images/I/41wddqDWz6L._MCnd_AC_.jpg"
          />
          <Product
            id="5646"
            title="MacBook Pro"
            price={14999.0}
            image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-14-digitalmat-gallery-1-202310?wid=728&hei=666&fmt=png-alpha&.v=1696971522628"
          />
          <Product
            id="1455"
            title="iPad Air"
            price={14999.0}
            image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipadair-digitalmat-gallery-1-202203?wid=728&hei=666&fmt=png-alpha&.v=1644962768135"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
