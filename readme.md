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
------
###Return Largest Numbers in Arrays
_Using Array.prototype.reduce():_
```Javascript
function returnLargestNumber(arr) {
  // reduce each inner array to a single value with Math.max()
  return arr.reduce(function (a, b) {
    return a.concat(Math.max.apply(Math, b));
  }, []);
}
```
_Using ES6 Features_
```Javascript
function returnLargestNumber(arr) {
  return arr.reduce((a, b) => {
    return a.concat(Math.max(...b));
  }, []);
}
```
------
###Confirm a String Ending
_Using String.prototype.slice():_
```Javascript
function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
}
```
------
###Repeat a String
_Using a for loop:_
```Javascript
function repeatStringNumTimes(str, num) {
  newStr = '';
  if(num > 0) {
    for (var i = 0; i < num; i++) {
      newStr += str;
    }
  }
  return newStr;
}
```
_Using built-in methods:_
```Javascript
function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : '';
}
```
------
###Truncate a String
_Using if else logic, and String.slice():_
```Javascript
function truncateString(str, num) {
  if (num < str.length) {
    if (num > 3) {
      return str.slice(0, num - 3) + '...';
    } else {
      return str.slice(0, num) + '...';
    }
  }
  return str;
}
```
_Using ternary operator_
```Javascript
function truncateString(str, num) {
  if (num < str.length) {
    return num > 3 ? str.slice(0, num - 3) + '...' : str.slice(0, num) + '...';
  }
  return str;
}
```
------
###Chunky Monkey (Grouping array elements by n-size)
_Using a for loop_
```Javascript
function chunkArrayInGroups(arr, size) {
  var newArr = [];
  for(var i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}
```
------
###Slasher Flick (removing elements from beginning of an array)
_Using Array.prototype.splice():_
```Javascript
function slasher(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}
```
_Using Array.prototype.slice():_
```Javascript
function slasher(arr, howMany) {
  return arr.slice(howMany);
}
```
------
###Mutations
_Using a for loop_
```Javascript
/* Return true if the string in the first element of the array contains 
  all of the letters of the string in the second element of the array. */
function mutation(arr) {
  var baseLine = arr[0].toLowerCase();
  var checkString = arr[1].toLowerCase();
  for(var i = 0; i < checkString.length; i++) {
    if(baseLine.indexOf(checkString[i]) === -1) {
      return false;
    }
  }
  return true;
}
```
------
###Falsy Bouncer
_Using Array.prototype.filter():_
```Javascript
// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
function bouncer(arr) {
  return arr.filter(function (val) {
     return val;
  });
}
```
------
###Seek and Destroy
_By converting extra arguments into an array and filtering arr:_
```Javascript
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments, 1);
  return arr.filter(function(val) {
    // if the current value is found in args, remove it.
    return args.indexOf(val) === -1;
  });
}
```
------
###Where Do I Belong
_Post-insertion:_
```Javascript
/* Return the lowest index at which a value (second argument) should be 
   inserted into an array (first argument) once it has been sorted */
function getIndexToIns(arr, num) {
  // make a copy and inject the number
  var arrCopy = arr.slice().concat(num);
  var sortedArr = arrCopy.sort(function(a, b) { return a - b; });
  // find the index where num was injected
  return sortedArr.indexOf(num);
}
```
------
###Caesars Cipher
_Using an Array:_
```Javascript
function rot13(str) {
  return str.split('').map(function (char) {
    var c = char.charCodeAt();
    // if C is a letter, add 13 for A-M, and subtract for N-Z
    if (char.match(/[A-Z]/)) {
      c = c < 78 ? (c + 13) : (c - 13);
    }
    return String.fromCharCode(c);
  }).join('');
}
```
_Using String.prototype.replace():_
```Javascript
function rot13(str) {
  return str.replace(/[A-Z]/g, function(c) {
    var cCode = c.charCodeAt();
    return String.fromCharCode(cCode < 78 ? (cCode + 13) : (cCode - 13));
  });
}

```
------
###Sum of Numbers in Range
```Javascript
/* Return the sum of values between a range of numbers. The lowest is not always first. */
function sumAll(arr) {
  // assign min and max values from input array
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let total = 0;
  // loop over and sum every number between min and max (inclusive)
  for (var i = min; i <= max; i++) {
    total += i;
  }
  return total;
}
```
------
###Diff Two Arrays
_Using Two Loops:_
```Javascript
function diffArray(arr1, arr2) {
  let newArr = [];
  for(var num of arr1) {
    if (arr2.indexOf(num) === -1) {
      newArr.push(num);
    } 
  }
  for(var num of arr2) {
    if(arr1.indexOf(num) === -1) {
      newArr.push(num);
    }
  }
  return newArr;
}
```
_Using Array Methods:_
```Javascript
function difArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(
      number => !arr1.includes(number) || !arr2.includes(number)
    );
}
```
------
###Convert to Roman Numerals
_Using Nested Loops:_
```Javascript
function convertToRoman(num) {
  const decimalValues = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  const romanNumerals = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  let romanized = '';

  for(var i = 0; i < decimalValues.length; i++) {
    while(decimalValues[i] <= num) {
      romanized += romanNumerals[i];
      num -= decimalValues[i];
    }
  }
  
  return romanized;
}
```
------
###Wherefor Art Thou
_Using Object.Keys and Object.prototype.hasOwnProperty():_
```Javascript
/* Check if an array of objects contains matching properties from a source object */
function whatIsInAName(collection, source) {
  var arr = [];

  collection.forEach((obj) => {
    let containsAll = true;
    Object.keys(source).forEach((key)=>{
      if(!(obj.hasOwnProperty(key) && obj[key] === source[key])){
        containsAll = false;
      }
    });
    if(containsAll) {
      arr.push(obj);
    }
  });

  return arr;
}
```


