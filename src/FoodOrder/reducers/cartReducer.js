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
  sum: 0
};

const cartReducer = (state = initalState, action) => {
  console.log(state);
  switch (action.type) {
    case "ADDITEM":
      return {
        ...state,
        Meals: state.Meals.map((item) => {
          if (item.id === action.id) {
            if (item.quantity == 0) {
              return {
                ...item,
                quantity: 1
              };
            } else {
              const addQuantity = (item.quantity += 1);
              return {
                ...item,
                quantity: addQuantity
              };
            }
          } else {
            return item;
          }
        })
      };

    default:
      return state;
  }
};

export default cartReducer;
