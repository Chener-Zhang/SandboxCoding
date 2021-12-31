import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [counter, setCounter] = useState(0);

  function onClickHandler(e) {
    switch (e.target.innerText) {
      case "+":
        setCounter(counter + 1);
      default:
        return null;
    }
  }
  return (
    <div className="container">
      <div className="result">{counter}</div>
      <div onClick={(e) => onClickHandler(e)}>1</div>
      <div onClick={(e) => onClickHandler(e)}>2</div>
      <div onClick={(e) => onClickHandler(e)}>3</div>
      <div onClick={(e) => onClickHandler(e)}>x</div>
      <div onClick={(e) => onClickHandler(e)}>4</div>
      <div onClick={(e) => onClickHandler(e)}>5</div>
      <div onClick={(e) => onClickHandler(e)}>6</div>
      <div onClick={(e) => onClickHandler(e)}>-</div>
      <div onClick={(e) => onClickHandler(e)}>7</div>
      <div onClick={(e) => onClickHandler(e)}>8</div>
      <div onClick={(e) => onClickHandler(e)}>9</div>
      <div onClick={(e) => onClickHandler(e)}>+</div>
      <div onClick={(e) => onClickHandler(e)}>0</div>
      <div onClick={(e) => onClickHandler(e)}>.</div>
      <div onClick={(e) => onClickHandler(e)}>=</div>
      <div onClick={(e) => onClickHandler(e)}>/</div>
      <div className="clear" onClick={(e) => onClickHandler(e)}>
        Clear
      </div>
    </div>
  );
}
export default Calculator;
