import React, { useState, useEffect } from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import "./CartButton.css";

function CartButton() {
  const cart = useSelector((state) => state.cartReducer);
  const totalQuantity = cart.Meals.reduce((previous, current) => {
    return previous + current.quantity;
  }, 0);

  const [quantity, setQuantity] = useState(totalQuantity);

  useEffect(() => {
    setQuantity(totalQuantity);
  }, [totalQuantity]);

  return (
    <button>
      <AiOutlineShoppingCart className="cartIcon" />
      <span>Your Cart</span>
      <span> {quantity} </span>
    </button>
  );
}

export default CartButton;
