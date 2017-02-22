function steamrollArray(arr) {
  var flattenedArray = [];
  // set up recursive function for flattening inner-arrays
  flatten = (innerArg) => {
    if(!Array.isArray(innerArg)){
      flattenedArray.push(innerArg);
    } else {
      for(var a in innerArg) {
        flatten(innerArg[a]);
      }
    }
  };
  arr.forEach(flatten);
  return flattenedArray;
}

steamrollArray([1, [2], [3, [[4]]]]);