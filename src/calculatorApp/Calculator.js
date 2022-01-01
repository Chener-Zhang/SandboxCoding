import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [expressionString, setExpressionString] = useState("");

  function onClickHandler(e) {
    const value = e.target.innerText;
    switch (value) {
      case "Clear":
        setExpressionString("");
        break;
      case "=":
        setExpressionString(eval(expressionString));
        break;
      case "0":
        if (expressionString.length !== 0) {
          setExpressionString(expressionString + value);
        }
        break;
      default:
        setExpressionString(expressionString + value);
    }
  }

  return (
    <div className="container">
      <div className="result">{expressionString}</div>
      <div onClick={(e) => onClickHandler(e)}>1</div>
      <div onClick={(e) => onClickHandler(e)}>2</div>
      <div onClick={(e) => onClickHandler(e)}>3</div>
      <div onClick={(e) => onClickHandler(e)}>*</div>
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
