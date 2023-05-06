function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  if (
    obj === null ||
    obj === undefined ||
    typeof classFunction !== "function"
  ) {
    return false;
  }

  return Object(obj) instanceof classFunction;
}

console.log(checkIfInstanceOf(new Date(), Date)); // true
