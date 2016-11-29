// Using a for loop:
function repeatStringNumTimes(str, num) {
  newStr = '';
  if(num > 0) {
    for (var i = 0; i < num; i++) {
      newStr += str;
    }
  }
  return newStr;
}

// Using built-in methods:
function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : '';
}
