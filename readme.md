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
  // Each time it runs, it evaluates the function on the right of the return statement before multiplying.
  // Once num === 0, factorialize(0) returns 1. This starts the multiplication up the chain of returns.
  return num * factorialize(num - 1);
}
```
------
###Check for Palindromes
_Using built-in methods:_
```Javascript
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
```
_Using a for loop:_
```Javascript
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
```
------
###Find Longest Word in a String
_Using a for loop:_
```Javascript
function findLongestWord(str) {
  var longestLength = 0;
  // Turn string into array of words
  var wordArr = str.split(' ');
  // Loop over array of words to find longest word
  for (var i = 0; i < wordArr.length; i++) {
    // If the current word is longer, change longest length.
    if (wordArr[i].length > longestLength) {
      longestLength = wordArr[i].length;
    }
  }
  return longestLength;
}
```
------
###Title Case a String
_Using a for loop:_
```Javascript
function titleCase(str) {
  // Setup a new string for building our titlecase string.
  var newStr = '';
  // Convert old string to lower case and split into array of words
  var wordArr = str.toLowerCase().split(' ');
  // Build our new string one word at a time making the first letter capitalized.
  for(var i = 0; i < wordArr.length; i++) {
    newStr += wordArr[i][0].toUpperCase() + wordArr[i].slice(1);
    // Add a space after each word unless it is the last word in the string.
    if(i < wordArr.length - 1) {
      newStr += ' ';
    }
  }
  console.log(newStr);
  return newStr;
}
```
_Using built-in functions (more elegant):_
```Javascript
function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word){
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}
```