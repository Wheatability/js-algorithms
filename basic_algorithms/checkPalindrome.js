// Using built-in methods:
function palindrome(str) {
  // Make the string lowercase and remove any non-alphanumeric characters.
  // Note the \W in the RegExp is any non-ascii characters [A-Za-z0-9_]
  // We include _ to account for removing _ as well for this example.
  str = str.toLowerCase().replace(/[\W_]/g, '');
  // Create a reversed string
  var reverse = str.split('').reverse().join('');
  // If the reverse of our string = original str, it is a palindrome.
  if (str === reverse) {
    return true;
  } else {
    return false;
  }
}

// Using a for loop:
function palindrome(str) {
  // Make the string lowercase and remove any non-alphanumeric characters.
  str = str.toLowerCase().replace(/[\W_]/g, '');
  // Loop through the string until the half way point
  for(var i = 0; i < str.length / 2; i++) {
    // Check the corresponding letters on the opposite side of the string.
    if(str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}
