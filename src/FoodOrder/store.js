//Reducer + Redux
import cartReducer from "./reducers/cartReducer";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({ cartReducer });
const store = createStore(rootReducer);

export default store;
