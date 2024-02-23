import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket }] = useStateValue();

  const uniqueBasketItems = Array.from(
    new Set(basket.map((item) => item.id))
  ).map((id) => {
    return basket.find((item) => item.id === id);
  });

  return (
    <div className="checkout">
      <div className="checkout_left">
        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          {uniqueBasketItems.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
        <div className="checkout_right">
          <Subtotal />
          <h2>The Subtotal will Go Here</h2>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
