// using built-in functions
function slasher(arr, howMany) {
  // make a copy of original array
  var arrCopy = arr.slice();
  arrCopy.splice(0, howMany);
  return arrCopy;
}

// using a for loop (much less efficient)
function slasher(arr, howMany) {
  // make a copy of original array
  var arrCopy = arr.slice();
  // loop through howMany times, and shift the array.
  for(var i = 0; i < howMany; i++) {
    arrCopy.shift();
  }
  return arrCopy;
}