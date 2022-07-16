import React from "react";
import "./Cart.css";
import { useStateValue } from "../StateProvider";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";

function Cart() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="cart">
      <div>
        <h2 style={{ marginLeft: 60 }}>Your Shopping Cart</h2>
        <div className="cart__title">
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <img className="" src="" alt="" />
      <div className="cart__subtotal">
        <Subtotal />
      </div>
    </div>
  );
}

export default Cart;
