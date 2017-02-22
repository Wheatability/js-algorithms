function smallestCommons(arr) {
  let range = [];
  // initialize range of values from given array values largest to smallest
  for(var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
  }
  // iterate through values comparing the lcm of new value to the lcm of the previous pair 
  return range.reduce((prev, cur) => {
    let curGCD = gcd(prev, cur);
    return (prev * cur) / curGCD;
  });

  // local recursive function for finding GCD of two values using euclidean algorithm
  function gcd(x, y) {
    if(y === 0) {
      return x;
    } 
    return gcd(y, x%y);
  }
}


console.log(smallestCommons([1,5]));