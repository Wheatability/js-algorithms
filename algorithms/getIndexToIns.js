/* Return the lowest index at which a value (second argument) should be 
   inserted into an array (first argument) once it has been sorted */
function getIndexToIns(arr, num) {
  // make a copy and inject the number
  var arrCopy = arr.slice().concat(num);
  var sortedArr = arrCopy.sort(function(a, b) { return a - b; });
  // find the index where num was injected
  return sortedArr.indexOf(num);
}
