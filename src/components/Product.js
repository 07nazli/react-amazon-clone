import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

const Product = ({ id, title, image, price }) => {
  const [{ basket }, dispatch] = useStateValue();
  //// console.log(basket);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: 1,
        title: "Product Title",
        image:
          "https://images-eu.ssl-images-amazon.com/images/G/41/TR-hq/2023/img/Prime/SIGN_UP_BOUNCEBACK_PROMO/TR23_PRIME_SIGN_UP_BOUNCEBACK_PROMO_Desktop_Card_758x608._SY608_CB574268667_.jpg",
        price: 10,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img src={image} alt="canva" />
      <button className="product_button" onClick={addToBasket}>
        Add To Basket
      </button>
    </div>
  );
};

export default Product;
