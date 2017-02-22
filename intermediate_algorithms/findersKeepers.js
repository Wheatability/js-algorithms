function findElement(arr, func) {
  let foundNum = undefined;
  arr.forEach((val) => {
    if (func(val) && !foundNum){
      foundNum = val;
    }
  });
  return foundNum;
}

console.log(findElement([1, 3, 5, 8, 9], function(num){ return num % 2 === 0; }));