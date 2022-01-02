const initalState = {
  Meals: [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
      quantity: 0
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
      Quantity: 0
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
      Quantity: 0
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
      Quantity: 0
    }
  ],
  sum: 0,
  cart: []
};

const cartReducer = (state = initalState, action) => {
  switch (action.type) {
    case "ADDITEM":
      //check if item is there

      //if it there, add one
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };

    // Quantity: 0
    // description: "A german specialty!"
    // id: "m2"
    // name: "Schnitzel"
    // price: 16.5

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
