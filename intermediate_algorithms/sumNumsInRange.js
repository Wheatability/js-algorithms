function sumAll(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let total = 0;
  for (var i = min; i <= max; i++) {
    total += i;
  }
  return total;
}

console.log(sumAll([4, 1]));
