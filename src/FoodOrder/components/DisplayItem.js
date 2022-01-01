import { Fragment } from "react";
import { Meals } from "./Meals";
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
                {" "}
                <h3>{item.name}</h3>
                <h4>{item.description}</h4>
                <h4>{item.price}</h4>
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
}

export default DisplayItem;
