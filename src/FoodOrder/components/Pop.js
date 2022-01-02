import React from "react";
import { useSelector } from "react-redux";
import "./Pop.css";

function Pop() {
  const data = useSelector((state) => state.cartReducer);
  const cart = data.cart;

  return (
    <>
      <ul className="cartStyle">
        {cart.map((item) => {
          return (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <h3>{item.quantity}</h3>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Pop;
