// using Array.prototype.splice()
function slasher(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}

// using Array.prototype.slice()
function slasher(arr, howMany) {
  return arr.slice(howMany);
}

