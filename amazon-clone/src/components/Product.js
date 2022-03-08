import React from "react";
import { useStateValue } from "../StateProvider";
import "./Product.css";

function Product({ id, title, rating, image, price }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log("this is the basket>>>", basket);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <span>{title}</span>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <div>
        <img className="product__img" src={image} alt="" />
      </div>
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
}

export default Product;
