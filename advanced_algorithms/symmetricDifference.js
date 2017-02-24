function sym(...args) {
  function diffArrays(array1, array2) {
    let results = [];
    array1.forEach((val) => {
      if(array2.indexOf(val) < 0 && results.indexOf(val) < 0) {
        results.push(val);
      }
    });
    array2.forEach((val) => {
      if(array1.indexOf(val) < 0 && results.indexOf(val) < 0) {
        results.push(val);
      }
    });
    return results;
  }
  return args.reduce(diffArrays);
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));