import React from "react";
import { useStateValue } from "../StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, title, rating, image, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutproduct">
      <div className="checkoutproduct__product">
        <div>
          <img className="checkoutproduct__image" src={image} alt="" />
        </div>
        <div className="checkoutproduct__info">
          <span className="checkoutproduct__title">{title}</span>
          <p className="checkoutproduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutproduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p className="checkoutproduct__rating">⭐</p>
              ))}
          </div>
          <div className="checkoutproduct__button" onClick={removeFromBasket}>
            Remove from Basket
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
