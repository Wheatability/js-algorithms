/* Maintain original order of numbers in final array with no duplicates */
// I use the rest operator to get the arguments as an array of arrays
function uniteUnique(...arr) {
  // reduce the 2d array to a single dimensional array
  let mergedArray = arr.reduce((a, b)=> {
    // if value already exists in array, filter it out
    b = b.filter((val) => { 
      return (a.indexOf(val) === -1);
    });
    return a.concat(b);
  });
  return mergedArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
