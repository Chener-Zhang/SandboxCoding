import { Fragment } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./CartButton.css";

function CartButton() {
  return (
    <button>
      <AiOutlineShoppingCart className="cartIcon" />
      <span>Your Cart</span>
      <span> 3</span>
    </button>
  );
}

export default CartButton;
