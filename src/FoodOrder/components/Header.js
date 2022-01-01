import React, { Fragment } from "react";
import CartButton from "./CartButton";
import MealsSummary from "./MealsSummary";

import "./Header.css";

function Header() {
  return (
    <Fragment>
      <header className="site-header">
        <h2>Brand</h2>
        <CartButton />
      </header>
      <MealsSummary />
    </Fragment>
  );
}

export default Header;
