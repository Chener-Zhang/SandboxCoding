import { Fragment } from "react";
import { Meals } from "./Meals";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

import "./DisplayItem.css";

function DisplayItem() {
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
                  <AiOutlineMinus />
                  <h4>{item.price}$</h4>
                  <AiOutlinePlus />
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
