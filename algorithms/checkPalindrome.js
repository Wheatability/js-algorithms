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