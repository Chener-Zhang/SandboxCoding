import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, sumItem } from "../actions/cartAction";

import "./DisplayItem.css";

function DisplayItem() {
  console.log(this);
  const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const Meals = cart.Meals;
  console.log(Meals);
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
                    onClick={() => dispatch(removeItem(item))}
                  >
                    -
                  </button>
                  <h4>{item.price}$</h4>
                  <button
                    className="addremoveButton"
                    onClick={() => dispatch(addItem(item))}
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
