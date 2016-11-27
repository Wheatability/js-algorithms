// Using a for loop:
function factorialize(num) {
  // factorialize(0) should return 1.
  if(num === 0) {
    return 1;
  } 
  // Start at 1 less than num and multiply num by that number.
  // Continue multiplying by one less than the current number until i = 0.
  for(var i = num - 1; i > 0; i--) {
    num *= i;
  }
  return num;
}

// Recursively:
function factorialize(num) {
  // factorialize(0) should return 1.
  if(num === 0) {
    return 1;
  }
  // The factorialize method is called recursively with n - 1 as a parameter.
  // Each time it runs, it evaluates the function on the right of the return statement before returning.
  // Once num === 0, factorialize(0) returns 1. This starts the multiplication up the chain of returns.
  return num * factorialize(num - 1);
}