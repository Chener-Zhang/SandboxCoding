import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import "./CartButton.css";
import Pop from "./Pop";
function CartButton() {
  const cart = useSelector((state) => state.cartReducer);
  const totalQuantity = cart.Meals.reduce((previous, current) => {
    return previous + current.quantity;
  }, 0);
  const [quantity, setQuantity] = useState(totalQuantity);
  const [cartClick, setCartClick] = useState(false);

  useEffect(() => {
    setQuantity(totalQuantity);
  }, [totalQuantity]);

  function onClickHanlder() {
    setCartClick(true);
  }
  function rederSummary() {
    return (
      <>
        <Pop />
      </>
    );
  }

  return (
    <button
      onClick={() => {
        onClickHanlder();
      }}
    >
      <AiOutlineShoppingCart className="cartIcon" />
      <span>Your Cart</span>
      <span> {quantity} </span>
      {cartClick ? rederSummary() : null}
    </button>
  );
}

export default CartButton;
