// Short version using built in string methods
function reverseString(str) {
  // 1. Split string into an array of characters
  // 2. Reverse the elements of the array.
  // 3. Turn the array back into a string.
  return str.split('').reverse().join('');
}

// Longer version using a for loop
function reverseString(str) {
  // Declare a new String
  var newStr = '';
  // Iterate through str in reverse and add the indexed character to newStr.
  for(var i = str.length -1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}