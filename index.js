// Adds two numbers and returns the sum.
function add(a, b) {
    return a + b;
  }
  
  // Subtracts the second number from the first and returns the result.
  function subtract(a, b) {
    return a - b;
  }
  
  // Multiplies two numbers and returns the product.
  function multiply(a, b) {
    return a * b;
  }
  
  // Divides the first number by the second and returns the quotient.
  function divide(a, b) {
    return a / b;
  }
  
  // Increments a number by 1 and returns the result.
  function increment(n) {
    return n + 1;
  }
  
  // Decrements a number by 1 and returns the result.
  function decrement(n) {
    return n - 1;
  }
  
  // Converts a string to an integer (base 10) and returns it.
  function makeInt(string) {
    return parseInt(string, 10);
  }
  
  // Converts a string to a floating-point number (preserving decimals) and returns it.
  function preserveDecimal(string) {
    return parseFloat(string);
  }
  
  // Export all functions so that the test file can access them.
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    increment,
    decrement,
    makeInt,
    preserveDecimal
  };
  