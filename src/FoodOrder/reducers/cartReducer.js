const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADDITEM":
      return [...state, action.item];
    default:
      return state;
  }
};
