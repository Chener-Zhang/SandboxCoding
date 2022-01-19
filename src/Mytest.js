import { useReducer } from "react";

function Mytest() {
  const initalState = {
    counter: 0
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return {
          counter: state.counter + 1
        };
      case "REMOVE":
        return {
          counter: state.counter - 1
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <div>
      <h2>{state.counter}</h2>
      <button onClick={() => dispatch({ type: "ADD" })}>--- + ---</button>
      <button onClick={() => dispatch({ type: "REMOVE" })}>--- - ---</button>
    </div>
  );
}

export default Mytest;
