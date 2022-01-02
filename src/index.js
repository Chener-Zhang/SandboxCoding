import ReactDOM from "react-dom";
import App from "./App";
import cartReducer from "../src/FoodOrder/reducers/cartReducer";
//Redux import
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

const rootReducer = combineReducers({ cartReducer });
const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
