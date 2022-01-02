import { Fragment } from "react";
import { Meals } from "./Meals";

import "./DisplayItem.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, sumItem } from "../actions/cartAction";

function DisplayItem() {
  const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  console.log(cart);

  return (
    <Fragment>
      <div className="itemDisplay">
        <ul>
          {Meals.map((item) => {
            return (
              <li key={item.id}>
                <div>
                  <h3>{item.name}</h3>
                  <h4>{item.description}</h4>
                </div>
                <div className="itemprice">
                  <button
                    className="addremoveButton"
                    onClick={() => dispatch(removeItem(item.name))}
                  >
                    -
                  </button>
                  <h4>{item.price}$</h4>
                  <button
                    className="addremoveButton"
                    onClick={() => dispatch(addItem(item.name))}
                  >
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
}

export default DisplayItem;
