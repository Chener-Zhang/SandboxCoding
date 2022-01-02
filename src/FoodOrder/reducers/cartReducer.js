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
      quantity: 0
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
      quantity: 0
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
      quantity: 0
    }
  ],
  sum: 0,
  cart: []
};

const cartReducer = (state = initalState, action) => {
  switch (action.type) {
    case "ADDITEM":
      //Find in meals
      let item = state.Meals.find((item) => item.id === action.id);

      //Find in cart
      let existedItem = state.cart.find((item) => item.id === action.id);

      if (existedItem) {
        existedItem.quantity += 1;
        return {
          ...state,
          sum: state.sum + existedItem.price
        };
      } else {
        item.quantity = 1;
        const newPrice = state.sum + item.price;
        return {
          ...state,
          sum: newPrice,
          cart: [...state.cart, item]
        };
      }
    case "REMOVEITEM":
      //Find in cart
      let toRemoveItem = state.cart.find((item) => item.id === action.id);

      //If exist
      if (toRemoveItem) {
        //if the last one
        if (toRemoveItem.quantity - 1 === 0) {
          toRemoveItem.quantity -= 1;
          const filterCart = state.cart.filter((item) => item.id !== action.id);
          const newSum = state.sum - toRemoveItem.price;
          return {
            ...state,
            sum: newSum,
            cart: filterCart
          };
        }
        //if not the last item
        else {
          toRemoveItem.quantity -= 1;
          const newSum = state.sum - toRemoveItem.price;
          return {
            ...state,
            sum: newSum
          };
        }
      }
      //if not exist
      else {
        return state;
      }

    default:
      return state;
  }
};

export default cartReducer;
