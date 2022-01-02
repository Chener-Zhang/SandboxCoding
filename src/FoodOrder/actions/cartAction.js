export function addItem(item) {
  return {
    type: "ADDITEM",
    payload: item
  };
}

export function removeItem(item) {
  return {
    type: "REMOVEITEM",
    payload: item
  };
}

export function sumItem() {
  return {
    type: "SUMITEM"
  };
}
