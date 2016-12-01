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

console.log(mutation(["hello", "hey"]));