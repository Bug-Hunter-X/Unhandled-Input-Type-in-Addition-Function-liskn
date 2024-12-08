function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Handle non-number inputs
  }
  return a + b; // this line might throw an error if a or b are not numbers
}