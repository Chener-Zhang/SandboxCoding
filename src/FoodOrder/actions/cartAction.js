export function addItem(id) {
  return {
    type: "ADDITEM",
    id: id
  };
}

export function removeItem(id) {
  return {
    type: "REMOVEITEM",
    id: id
  };
}

export function updateCart() {
  return {
    type: "UPDATECART"
  };
}
