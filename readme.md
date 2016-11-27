#Javascript Algorithms
### A Collection of Algorithms in Javascript
##### As I learn algorithms, I will update this list with each algorithm!
------
###Reverse A String
_Using built-in functions:_
```Javascript
function reverseString(str) {
  // 1. Split string into an array of characters
  // 2. Reverse the elements of the array.
  // 3. Turn the array back into a string.
  return str.split('').reverse().join('');
}
```
_Using a for loop:_
```Javascript
function reverseString(str) {
  // Declare a new String
  var newStr = '';
  // Iterate through str in reverse and add the indexed character to newStr.
  for(var i = str.length -1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}
```
------
###Factorialize A Number
_Using a for loop:_
```Javascript
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
```
_Using recursion:_
```Javascript
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
```