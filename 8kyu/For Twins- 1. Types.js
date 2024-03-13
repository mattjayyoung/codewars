// For Twins: 1. Types (7kyu) - March 13th

function typeValidation(variable, type) {
  return typeof variable === type ? true : false
}

typeValidation(42, "number") // true);
typeValidation("42", "number") // false)