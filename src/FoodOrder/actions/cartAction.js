export function addItem(item) {
  return {
    type: "ADDITEM",
    item: item
  };
}

export function removeItem(item) {
  return {
    type: "REMOVEITEM",
    item: item
  };
}

export function sumItem() {
  return {
    type: "SUMITEM"
  };
}
