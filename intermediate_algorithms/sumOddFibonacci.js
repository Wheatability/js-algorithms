function sumFibs(num) {
  var fibNums = [];
  var a = 0;
  var b = 1;
  // Generate Fibs

  return fibNums.filter((val) => {
    console.log(val, 'val1');
    return (val % 2 !== 0);
  }).reduce((acc, val) => {
    console.log(val, 'val2');
    return acc + val;
  }, 0);
}

console.log(sumFibs(10));