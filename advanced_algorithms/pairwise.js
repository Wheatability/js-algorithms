function pairwise(arr, arg) {
  let arrCopy = arr.slice(),
      sum = 0;

  for(let i = 0; i < arr.length; i++) {
    for(let k = i + 1; k < arr.length; k++) {
      if (arrCopy[i] + arrCopy[k] === arg) {
        sum += i + k;
        arrCopy[i] = arrCopy[k] = NaN;
      }
    }
  }
  return sum;
}