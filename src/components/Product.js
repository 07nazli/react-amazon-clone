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
        id: id,
        title: title,
        image: image,
        price: price,
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
      <img src={image} alt="product_img" />
      <button className="product_button" onClick={addToBasket}>
        Add To Basket
      </button>
    </div>
  );
};

export default Product;
