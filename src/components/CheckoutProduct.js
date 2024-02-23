import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

const CheckoutProduct = ({ id, title, image, price }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div>
      <div className="checkoutProduct">
        <img className="checkoutProduct_image" src={image} alt={title} />
        <div className="checkoutProduct_info">
          <p className="checkoutProduct_title">{title}</p>
          <p className="checkoutProduct_price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <button onClick={removeFromBasket}>Remove From Basket</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
