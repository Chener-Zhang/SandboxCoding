import React, { Fragment } from "react";
import "./Header.css";
import mealImg from "./img/meals.jpg";

function Header() {
  return (
    <Fragment>
      <header class="site-header">
        <h2>Brand</h2>
        <button>Cart</button>
      </header>
    </Fragment>
  );
}

export default Header;
