// using Array.prototype.reduce()
function returnLargestNumber(arr) {
  // reduce each inner array to a single value with Math.max()
  return arr.reduce(function (a, b) {
    return a.concat(Math.max.apply(Math, b));
  }, []);
}

// using ES6 features
function returnLargestNumber(arr) {
  return arr.reduce((a, b) => {
    return a.concat(Math.max(...b));
  }, []);
}
