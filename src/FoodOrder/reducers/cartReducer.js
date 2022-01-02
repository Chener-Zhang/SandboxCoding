const initalState = {
  sum: 0,
  cart: []
};

const cartReducer = (state = initalState, action) => {
  switch (action.type) {
    case "ADDITEM":
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case "REMOVEITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item !== action.payload)
      };

    default:
      return state;
  }
};

export default cartReducer;
